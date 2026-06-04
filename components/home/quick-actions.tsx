import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";
import { Pressable, Text, View } from "react-native";

import { rtlTextCenter, rtlView } from "@/constants/rtl";
import { colors } from "@/constants/theme";

type QuickAction = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

/** Right-to-left visual order: انتقال → شارژ سریع → سبد خرید */
const actions: QuickAction[] = [
  { label: "انتقال", icon: "swap-horizontal" },
  { label: "شارژ سریع", icon: "card-outline" },
  { label: "سبد خرید", icon: "cart-outline" },
];

function QuickActionButton({ label, icon, onPress }: QuickAction) {
  return (
    <Pressable
      onPress={() => {
        if (process.env.EXPO_OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress?.();
      }}
      style={({ pressed }) => ({
        flex: 1,
        alignItems: "center",
        gap: 10,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          borderCurve: "continuous",
          backgroundColor: colors.surfaceElevated,
          borderWidth: 1,
          borderColor: colors.border,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name={icon} size={26} color={colors.gold} />
      </View>
      <Text
        selectable
        style={[rtlTextCenter, { color: colors.textPrimary, fontSize: 13 }]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function QuickActions() {
  return (
    <View
      style={[
        rtlView,
        {
          flexDirection: "row",
          paddingHorizontal: 24,
          marginBottom: 28,
          gap: 8,
        },
      ]}
    >
      {actions.map((action) => (
        <QuickActionButton key={action.label} {...action} />
      ))}
    </View>
  );
}
