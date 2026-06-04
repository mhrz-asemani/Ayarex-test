import { TextStyle, ViewStyle } from "react-native";

/** Apply to container Views so row layout flows right-to-left. */
export const rtlView: ViewStyle = {
  direction: "rtl",
};

/** Default Persian / RTL body text. */
export const rtlText: TextStyle = {
  writingDirection: "rtl",
  textAlign: "right",
};

/** Centered RTL text (empty states, buttons). */
export const rtlTextCenter: TextStyle = {
  writingDirection: "rtl",
  textAlign: "center",
};