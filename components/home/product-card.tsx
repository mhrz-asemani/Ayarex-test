import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import * as Haptics from "expo-haptics";
import { Pressable, Text, View } from "react-native";

import { rtlText, rtlView } from "@/constants/rtl";
import { colors } from "@/constants/theme";

export type Product = {
  id: string;
  title: string;
  price: string;
  image?: number;
};

type ProductCardProps = {
  product: Product;
  width: number;
  onAddToCart?: (product: Product) => void;
};

export function ProductCard({ product, width, onAddToCart }: ProductCardProps) {
  return (
    <View
      style={[
        rtlView,
        {
          width,
          backgroundColor: colors.surface,
          borderRadius: 16,
          borderCurve: "continuous",
          borderWidth: 1,
          borderColor: colors.border,
          overflow: "hidden",
        },
      ]}
    >
      {product.image ? (
        <Image
          source={product.image}
          style={{ width: "100%", height: 120 }}
          contentFit="cover"
        />
      ) : (
        <View
          style={{
            width: "100%",
            height: 120,
            backgroundColor: colors.surfaceElevated,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="medal-outline" size={40} color={colors.goldMuted} />
        </View>
      )}

      <View style={{ padding: 12, gap: 10 }}>
        <Text
          selectable
          numberOfLines={2}
          style={[
            rtlText,
            { color: colors.textPrimary, fontSize: 14, fontWeight: "600" },
          ]}
        >
          {product.title}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "baseline", gap: 4 }}>
          <Text
            selectable
            style={[rtlText, { color: colors.textSecondary, fontSize: 12 }]}
          >
            تومان
          </Text>
          <Text
            selectable
            style={[
              rtlText,
              {
                color: colors.textPrimary,
                fontSize: 16,
                fontWeight: "700",
                fontVariant: ["tabular-nums"],
              },
            ]}
          >
            {product.price}
          </Text>
        </View>

        <Pressable
          onPress={() => {
            if (process.env.EXPO_OS === "ios") {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
            onAddToCart?.(product);
          }}
          style={({ pressed }) => ({
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            paddingVertical: 10,
            borderRadius: 12,
            borderCurve: "continuous",
            borderWidth: 1,
            borderColor: colors.goldMuted,
            backgroundColor: colors.surfaceElevated,
            opacity: pressed ? 0.75 : 1,
          })}
        >
          <Ionicons name="cart-outline" size={18} color={colors.gold} />
          <Text
            selectable
            style={[rtlText, { color: colors.gold, fontSize: 13, fontWeight: "500" }]}
          >
            افزودن به سبد
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
