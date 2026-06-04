import { ScrollView, View } from "react-native";

import { ChargeBanner } from "@/components/home/charge-banner";
import { GoldPriceSection } from "@/components/home/gold-price-section";
import { HomeHeader } from "@/components/home/home-header";
import { QuickActions } from "@/components/home/quick-actions";
import { StoreSlider } from "@/components/home/store-slider";
import { TodayOrdersSection } from "@/components/home/today-orders-section";
import { rtlView } from "@/constants/rtl";
import { colors } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <View style={[rtlView, { flex: 1, backgroundColor: colors.background }]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <HomeHeader />
        <ChargeBanner />
        <QuickActions />
        <GoldPriceSection />
        <TodayOrdersSection />
        <StoreSlider />
      </ScrollView>
    </View>
  );
}
