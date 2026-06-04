import { Pressable, Text, View } from "react-native";

import { rtlText, rtlView } from "@/constants/rtl";
import { colors } from "@/constants/theme";

type TodayOrdersSectionProps = {
  onViewAllPress?: () => void;
};

export function TodayOrdersSection({
  onViewAllPress,
}: TodayOrdersSectionProps) {
  return (
    <View style={[rtlView, { paddingHorizontal: 16, marginBottom: 20 }]}>
      <View
        style={{
          backgroundColor: colors.surface,
          borderRadius: 16,
          borderCurve: "continuous",
          borderWidth: 1,
          borderColor: colors.border,
          paddingHorizontal: 16,
          paddingVertical: 14,
          gap: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            selectable
            style={[
              rtlText,
              { color: colors.textPrimary, fontSize: 15, fontWeight: "600" },
            ]}
          >
            سفارش‌های امروز
          </Text>

          <Pressable onPress={onViewAllPress}>
            <Text
              selectable
              style={[rtlText, { color: colors.gold, fontSize: 13 }]}
            >
              همه
            </Text>
          </Pressable>
        </View>

        <Text
          selectable
          style={[rtlText, { color: colors.textMuted, fontSize: 13 }]}
        >
          امروز سفارشی ثبت نشده
        </Text>
      </View>
    </View>
  );
}
