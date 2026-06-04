import { fonts } from "@/constants/fonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    ...fonts,
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitleStyle: { fontFamily: "IranYekanMedium" },
          contentStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
    </Stack>
  );
}
