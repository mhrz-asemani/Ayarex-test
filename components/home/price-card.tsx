import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";
import { Pressable, Text, View } from "react-native";

import { rtlText, rtlTextCenter, rtlView } from "@/constants/rtl";
import { colors } from "@/constants/theme";

type PriceCardProps = {
  type: "buy" | "sell";
  price: string;
  onActionPress?: () => void;
};

const config = {
  buy: {
    title: "خرید",
    buttonLabel: "خرید",
    icon: "cart-outline" as const,
  },
  sell: {
    title: "فروش",
    buttonLabel: "فروش",
    icon: "pricetag-outline" as const,
  },
};

export function PriceCard({ type, price, onActionPress }: PriceCardProps) {
  const { title, buttonLabel, icon } = config[type];

  return (
    <View
      style={[
        rtlView,
        {
          flex: 1,
          backgroundColor: colors.surface,
          borderRadius: 16,
          borderCurve: "continuous",
          borderWidth: 1,
          borderColor: colors.border,
          padding: 14,
          gap: 8,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* RTL start (right): title */}
        <Text
          selectable
          style={[
            rtlText,
            { color: colors.textPrimary, fontSize: 15, fontWeight: "600" },
          ]}
        >
          {title}
        </Text>

        {/* RTL end (left): icon */}
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            borderCurve: "continuous",
            backgroundColor: colors.gold,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name={icon} size={16} color="#0a0a0a" />
        </View>
      </View>

      <Text
        selectable
        style={[rtlText, { color: colors.textMuted, fontSize: 12 }]}
      >
        هر گرم
      </Text>

      <Text
        selectable
        style={[
          rtlText,
          {
            color: colors.textPrimary,
            fontSize: 20,
            fontWeight: "700",
            fontVariant: ["tabular-nums"],
          },
        ]}
      >
        {price}
      </Text>

      <Text
        selectable
        style={[rtlText, { color: colors.textSecondary, fontSize: 13 }]}
      >
        تومان
      </Text>

      <Pressable
        onPress={() => {
          if (process.env.EXPO_OS === "ios") {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }
          onActionPress?.();
        }}
        style={({ pressed }) => ({
          marginTop: 4,
          backgroundColor: colors.gold,
          borderRadius: 12,
          borderCurve: "continuous",
          paddingVertical: 12,
          alignItems: "center",
          opacity: pressed ? 0.85 : 1,
        })}
      >
        <Text
          selectable
          style={[
            rtlTextCenter,
            { color: "#0a0a0a", fontSize: 15, fontWeight: "700" },
          ]}
        >
          {buttonLabel}
        </Text>
      </Pressable>
    </View>
  );
}
