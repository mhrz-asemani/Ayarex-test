import { View, ViewStyle } from "react-native";

import { pageBackground } from "@/constants/theme";

type ScreenBackgroundProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function ScreenBackground({ children, style }: ScreenBackgroundProps) {
  return <View style={[pageBackground, style]}>{children}</View>;
}
