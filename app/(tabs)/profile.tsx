import { Text, View } from "react-native";

import { rtlTextCenter, rtlView } from "@/constants/rtl";
import { colors } from "@/constants/theme";

export default function ProfileScreen() {
  return (
    <View
      style={[
        rtlView,
        {
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Text selectable style={[rtlTextCenter, { color: colors.textPrimary }]}>
        پروفایل
      </Text>
    </View>
  );
}
