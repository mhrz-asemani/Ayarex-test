import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";

import { rtlText, rtlView } from "@/constants/rtl";
import { colors } from "@/constants/theme";

type HomeHeaderProps = {
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
};

export function HomeHeader({
  onMenuPress,
  onNotificationPress,
}: HomeHeaderProps) {
  return (
    <View
      style={[
        rtlView,
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingTop: 8,
          paddingBottom: 12,
        },
      ]}
    >
      {/* RTL start (right): menu */}
      <Pressable
        onPress={onMenuPress}
        style={({ pressed }) => ({
          width: 44,
          height: 44,
          borderRadius: 12,
          borderCurve: "continuous",
          backgroundColor: colors.surfaceElevated,
          alignItems: "center",
          justifyContent: "center",
          opacity: pressed ? 0.7 : 1,
        })}
      >
        <Ionicons name="menu" size={22} color={colors.textPrimary} />
      </Pressable>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {/* Dot sits at the reading-start (physical right) of the logo */}
        <View
          style={{
            width: 6,
            height: 6,
            borderRadius: 3,
            backgroundColor: colors.gold,
          }}
        />
        <Text
          selectable
          style={[
            rtlText,
            {
              color: colors.textPrimary,
              fontSize: 22,
              fontWeight: "600",
            },
          ]}
        >
          عیارکس
        </Text>
      </View>

      {/* RTL end (left): notifications */}
      <Pressable
        onPress={onNotificationPress}
        style={({ pressed }) => ({
          width: 44,
          height: 44,
          borderRadius: 12,
          borderCurve: "continuous",
          backgroundColor: colors.surfaceElevated,
          alignItems: "center",
          justifyContent: "center",
          opacity: pressed ? 0.7 : 1,
        })}
      >
        <Ionicons
          name="notifications-outline"
          size={22}
          color={colors.textPrimary}
        />
      </Pressable>
    </View>
  );
}
