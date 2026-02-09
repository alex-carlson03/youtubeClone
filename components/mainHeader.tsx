import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

const MainHeader = () => {
  return (
    <View style={styles.container}>
      {/*YouTube Logo */}
      <View style={styles.leftContainer}>
        <Image
          source={{
            uri: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png",
          }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Icons */}
      <View style={styles.rightContainer}>
        <Pressable style={styles.iconButton}>
          <MaterialCommunityIcons name="cast" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.iconButton}>
          <Feather name="search" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "white",
    marginTop: 40,
  },
  leftContainer: {
    width: 100,
    height: 40,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 40,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 20,
  },
});
