import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerRight: () => {
          return (
            <View style={styles.rightContainer}>
              <Pressable style={styles.iconButton}>
                <MaterialCommunityIcons name="cast" size={24} color="black" />
              </Pressable>
              <Pressable style={styles.iconButton}>
                <Feather name="search" size={24} color="black" />
              </Pressable>
              <Pressable style={styles.iconButton}>
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
              </Pressable>
            </View>
          );
        },
      }}
    >
      <Stack.Screen
        name="page"
        options={{ title: "page", headerShown: false }}
      />
      <Stack.Screen name="playlists" options={{ title: "Playlists" }} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginRight: 20,
  },
});
