import { useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  useWindowDimensions,
  View,
  ViewToken,
} from "react-native";

import { rtlText, rtlView } from "@/constants/rtl";
import { colors } from "@/constants/theme";

import { Product, ProductCard } from "./product-card";

const products: Product[] = [
  {
    id: "1",
    title: "سکه پارسیان-کیان گلد",
    price: "۱۸,۷۳۶,۷۸۴",
  },
  {
    id: "2",
    title: "سکه پارسیان-لوتوس",
    price: "۱۸,۷۳۶,۷۸۴",
  },
  {
    id: "3",
    title: "سکه پارسیان-کیان گلد",
    price: "۱۸,۷۳۶,۷۸۴",
  },
  {
    id: "4",
    title: "سکه پارسیان-لوتوس",
    price: "۱۸,۷۳۶,۷۸۴",
  },
];

type StoreSliderProps = {
  onViewAllProductsPress?: () => void;
  onAddToCart?: (product: Product) => void;
};

const CARDS_PER_VIEW = 2;

export function StoreSlider({
  onViewAllProductsPress,
  onAddToCart,
}: StoreSliderProps) {
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList<Product>>(null);
  const [activePage, setActivePage] = useState(0);

  const horizontalPadding = 16;
  const cardGap = 12;
  const cardWidth =
    (width - horizontalPadding * 2 - cardGap * (CARDS_PER_VIEW - 1)) /
    CARDS_PER_VIEW;
  const pageWidth = cardWidth * CARDS_PER_VIEW + cardGap;
  const pageCount = Math.ceil(products.length / CARDS_PER_VIEW);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.x;
    const page = Math.round(offset / pageWidth);
    setActivePage(Math.min(Math.max(page, 0), pageCount - 1));
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const firstIndex = viewableItems[0]?.index;
      if (firstIndex != null) {
        setActivePage(Math.floor(firstIndex / CARDS_PER_VIEW));
      }
    },
  ).current;

  return (
    <View style={[rtlView, { marginBottom: 24, gap: 14 }]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: horizontalPadding,
        }}
      >
        <Text
          selectable
          style={[
            rtlText,
            { color: colors.textPrimary, fontSize: 16, fontWeight: "700" },
          ]}
        >
          فروشگاه
        </Text>

        <Pressable
          onPress={onViewAllProductsPress}
          style={({ pressed }) => ({
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 20,
            borderCurve: "continuous",
            backgroundColor: colors.surfaceElevated,
            opacity: pressed ? 0.75 : 1,
          })}
        >
          <Text
            selectable
            style={[rtlText, { color: colors.textPrimary, fontSize: 12 }]}
          >
            همه محصولات
          </Text>
        </Pressable>
      </View>

      <FlatList
        ref={listRef}
        data={products}
        horizontal
        scrollEnabled={products.length > CARDS_PER_VIEW}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        snapToInterval={pageWidth}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
        style={{ direction: "rtl" }}
        contentContainerStyle={{
          paddingHorizontal: horizontalPadding,
          gap: cardGap,
        }}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            width={cardWidth}
            onAddToCart={onAddToCart}
          />
        )}
      />

      {pageCount > 1 && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          {Array.from({ length: pageCount }, (_, index) => (
            <View
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor:
                  index === activePage ? colors.gold : colors.surfaceElevated,
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
}
