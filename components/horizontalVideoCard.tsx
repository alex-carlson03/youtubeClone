import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import channelsData from "../data/channels.json";
import { Link } from "expo-router";
import { Pressable } from "react-native";


type HorizontalVideoCardProps = {
  title: string;
  channelId: string;
  thumbnailUrl: string;
};

const HorizontalVideoCard = (props: HorizontalVideoCardProps) => {
  // Get channel info from channelId
  const channel = channelsData.channels.find(
    (channel) => channel.id === props.channelId
  );

  const channelName = channel ? channel.name : "Unknown Channel";

  return (
    <View style={styles.container}>
      {/* Thumbnail */}
      <View style={styles.thumbnailContainer}>
        <Image
          source={{ uri: props.thumbnailUrl }}
          style={styles.thumbnail}
        />
      </View>

      {/* Video info */}
      <View style={styles.videoInfo}>
  <Text style={styles.title} numberOfLines={2}>
    {props.title}
  </Text>

  <Link href={`/channel/${props.channelId}`} asChild>
    <Pressable>
      <Text style={styles.channelName}>{channelName}</Text>
    </Pressable>
  </Link>
</View>

      {/* Three dots menu */}
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="ellipsis-vertical" size={18} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default HorizontalVideoCard;

const styles = StyleSheet.create({
  container: {
    width: 170,
    marginRight: 12,
  },
  thumbnailContainer: {
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e0e0e0",
  },
  thumbnail: {
    width: "100%",
    height: 95,
  },
  videoInfo: {
    marginTop: 8,
    paddingRight: 24,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  channelName: {
    fontSize: 12,
    color: "#606060",
    marginTop: 2,
  },
  menuButton: {
    position: "absolute",
    top: 100,
    right: 0,
  },
});