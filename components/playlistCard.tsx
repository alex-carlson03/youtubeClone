import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type PlaylistCardProps = {
  title: string;
  visibility: "public" | "private";
  videoCount: number;
  thumbnailUrl: string;
  updatedAt?: string;
};

const PlaylistCard = (props: PlaylistCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image
          source={{ uri: props.thumbnailUrl }}
          style={styles.thumbnailImage}
        />
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{props.videoCount}</Text>
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
        <Text style={styles.subtitle}>
          {props.visibility === "private" ? "Private" : "Public"} · Playlist
        </Text>
        {props.updatedAt && (
          <Text style={styles.updatedAt}>{props.updatedAt}</Text>
        )}
      </View>
      <Pressable>
        <Ionicons
          name="ellipsis-vertical"
          size={20}
          color="#606060"
          style={styles.menuDots}
        />
      </Pressable>
    </View>
  );
};

export default PlaylistCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
  },
  thumbnailContainer: {
    width: 160,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  countBadge: {
    position: "absolute",
    bottom: 6,
    right: 6,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  countText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  details: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: "center",
    gap: 3,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f0f0f",
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 13,
    color: "#606060",
    marginTop: 3,
  },
  updatedAt: {
    fontSize: 13,
    color: "#606060",
  },
  menuDots: {
    fontSize: 20,
    color: "#606060",
    paddingHorizontal: 6,
    alignSelf: "center",
  },
});
