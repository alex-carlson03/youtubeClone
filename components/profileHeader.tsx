import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {Pressable, StyleSheet, View } from "react-native";
{/*Basically the same as mainHeader.tsx with minor changes for profile view 
    -removed youtube logo from left side of header.
    -removed image import because it is not needed.*/}

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.iconButton}></Pressable>
        {/*Icons*/}
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
        <Pressable style={styles.iconButton}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileHeader;

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

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 20,
  },
});
