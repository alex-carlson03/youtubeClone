import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import channelsData from "../data/channels.json";

type videoCardProps = {
  channelId: string;
  title: string;
  views: string;
  uploaded: string;
  thumbnailUrl: string;
};

const VideoCard = (props: videoCardProps) => {
  // get channel avatar from channelId
  const channel = channelsData.channels.find(
    (channel) => channel.id === props.channelId,
  );

  const avatarUrl = channel ? channel.profileImage : "";
  const channelName = channel ? channel.name : "";

  return (
    <View>
      {/* Thumbnail */}
      <View style={styles.thumbnail}>
        <Image
          source={{ uri: props.thumbnailUrl }}
          style={styles.thumbnailImage}
        />
      </View>
      {/* Details */}
      <View style={styles.details}>
        <Link href={`/channel/${props.channelId}`} asChild>
          <Pressable>
            {avatarUrl ? (
              <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarFallback} />
            )}
          </Pressable>
        </Link>
        {/* Text Details */}
        <View style={styles.detailsText}>
          <Text>{props.title}</Text>
          <View style={styles.detailsNoTitle}>
            <Link href={`/channel/${props.channelId}`} asChild>
              <Pressable>
                <Text>{channelName} • </Text>
              </Pressable>
            </Link>
            <Text>
              {props.views} views • {props.uploaded}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
const styles = StyleSheet.create({
  thumbnail: {
    height: 200,
    backgroundColor: "gray",
  },
  thumbnailImage: {
    height: "100%",
    width: "100%",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  details: {
    marginHorizontal: 10,
    flexDirection: "row",
    marginTop: 10,
  },
  detailsText: {
    padding: 10,
  },
  detailsNoTitle: {
    justifyContent: "center",
    flexDirection: "row",
  },
  avatarFallback: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
  },
});
