import * as Haptics from "expo-haptics";
import { Pressable, Text, View } from "react-native";

import { rtlText, rtlView } from "@/constants/rtl";
import { colors } from "@/constants/theme";

type ChargeBannerProps = {
  onChargePress?: () => void;
};

export function ChargeBanner({ onChargePress }: ChargeBannerProps) {
  return (
    <View
      style={[
        rtlView,
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 16,
          marginBottom: 20,
          gap: 12,
        },
      ]}
    >
      {/* RTL start (right): message */}
      <Text
        selectable
        style={[
          rtlText,
          {
            flex: 1,
            color: colors.textSecondary,
            fontSize: 13,
          },
        ]}
      >
        حساب شما هنوز شارژ نشده است.
      </Text>

      {/* RTL end (left): action */}
      <Pressable
        onPress={() => {
          if (process.env.EXPO_OS === "ios") {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }
          onChargePress?.();
        }}
        style={({ pressed }) => ({
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 20,
          borderCurve: "continuous",
          borderWidth: 1,
          borderColor: colors.gold,
          opacity: pressed ? 0.7 : 1,
        })}
      >
        <Text
          selectable
          style={[
            rtlText,
            { color: colors.gold, fontSize: 13, fontWeight: "500" },
          ]}
        >
          شارژ حساب
        </Text>
      </Pressable>
    </View>
  );
}
