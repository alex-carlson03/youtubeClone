import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import VideoCard from "../components/videoCard";
import videoData from "../data/videos.json"; // importing video data

const index = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={videoData.videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnailUrl={item.thumbnail}
            views={item.views}
            uploaded={item.uploaded}
            channelId={item.channelId}
          />
        )}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
