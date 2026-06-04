import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/theme";

function TabIcon({
  name,
  focused,
}: {
  name: keyof typeof Ionicons.glyphMap;
  focused: boolean;
}) {
  return (
    <View
      style={{
        alignItems: "center",
        gap: 6,
        paddingTop: 4,
      }}
    >
      <Ionicons
        name={name}
        color={focused ? colors.gold : colors.textMuted}
        size={24}
      />
      {/* {focused && (
        <View
          style={{
            width: 24,
            height: 2,
            borderRadius: 1,
            backgroundColor: colors.gold,
          }}
        />
      )} */}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.gold,
        // tabBarInactiveTintColor: colors.textMuted,
        tabBarInactiveTintColor: "rgba(255,255,255,0.6)",
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: {
          fontFamily: "IranYekanMedium",
          fontSize: 12,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            tint="dark"
            style={StyleSheet.absoluteFillObject}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "پروفایل",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "person-circle" : "person-circle-outline"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="exchange"
        options={{
          title: "کیف پول",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "wallet" : "wallet-outline"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "خانه",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "home" : "home-outline"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Fallback for Android
    borderTopWidth: 0,
    elevation: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    overflow: "hidden", // Important for borderRadius with BlurView
  },
});
