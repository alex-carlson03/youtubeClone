import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="shorts" options={{ title: "Shorts" }} />
      <Tabs.Screen
        name="create"
        options={{
          title: "",
          tabBarIcon: () => <Text style={styles.createIcon}>+</Text>,
        }}
      />
      <Tabs.Screen name="subscriptions" options={{ title: "Subscriptions" }} />
      <Tabs.Screen name="profile" options={{ title: "You" }} />
      <Tabs.Screen
        name="channel/[id]"
        options={{
          href: null, // hide from tab bar
        }}
      />
    </Tabs>
  );
}

const styles = {
  createIcon: {
    fontSize: 30,
  },
};
