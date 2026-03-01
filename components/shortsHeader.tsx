import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {Pressable, StyleSheet, View } from "react-native";
{/*Basically the same as profileHeader with minor changes for shorts view 
    -removed settings icon from the header */}

const ShortsHeader = () => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.iconButton}></Pressable>
        {/*Icons*/}
      <View style={styles.rightContainer}>
        <Pressable style={styles.iconButton}>
          <Feather name="search" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.iconButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="#000" />
        </Pressable>
      </View>
    </View>
  );
};

export default ShortsHeader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "transparent",
    marginTop: 40,
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 20,
  },
});
