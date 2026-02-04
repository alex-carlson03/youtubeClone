import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type videoCardProps = {
  channelId: string;
  title: string;
  views: string;
  uploaded: string;
  thumbnailUrl: string;
};

const VideoCard = (props: videoCardProps) => {
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
        <Text>{props.title}</Text>
        <Text>
          {props.views} views • {props.uploaded}
        </Text>
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
  details: {
    padding: 10,
  },
});
