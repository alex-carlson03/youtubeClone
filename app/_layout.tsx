import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function RootLayout() {
  // TODO: Create a bottom nav bar with Home, Shorts, Create (just a plus symbol), Subscriptions, and Profile (You)

  return (
    <Tabs>
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
    </Tabs>
  );
}

const styles = {
  createIcon: {
    fontSize: 30,
  },
};
