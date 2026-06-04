import { Text, View } from "react-native";

import { rtlText, rtlView } from "@/constants/rtl";
import { colors } from "@/constants/theme";

import { PriceCard } from "./price-card";

export function GoldPriceSection() {
  return (
    <View style={[rtlView, { paddingHorizontal: 16, marginBottom: 24, gap: 14 }]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 8,
        }}
      >
        {/* RTL start (right): section title, then icon to its left */}
        <Text
          selectable
          style={[
            rtlText,
            { color: colors.textPrimary, fontSize: 16, fontWeight: "600" },
          ]}
        >
          قیمت طلای آبشده
        </Text>
        <Text style={{ fontSize: 20 }}>🥇</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 12 }}>
        {/* RTL start (right): buy, then sell */}
        <PriceCard type="buy" price="۱۸,۱۹۱,۰۵۲" />
        <PriceCard type="sell" price="۱۸,۱۵۶,۴۲۵" />
      </View>
    </View>
  );
}
