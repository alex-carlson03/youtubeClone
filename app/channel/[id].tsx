import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";
import channelsData from "../../data/channels.json";

import { FlatList } from "react-native";
import HorizontalVideoCard from "../../components/horizontalVideoCard";
import VideoCard from "../../components/videoCard";
import videoData from "../../data/videos.json";



const ChannelPage = () => {
  const { id } = useLocalSearchParams();

  // find the specific channel data
  const channel = (channelsData as any).channels.find(
    (c: any) => String(c.id) === String(id),
  );

  if (!channel) {
    return (
      <View style={styles.container}>
        <Text>Channel not found!</Text>
      </View>
    );
  }

  // videos for this channel
  const channelVideos = videoData.videos.filter(
    (v: any) => String(v.channelId) === String(channel.id),
  );

  // "For You" section (first few)
  const forYouVideos = channelVideos.slice(0, 6);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Stack.Screen options={{ title: channel.name }} />

      {/* Banner */}
      <ImageBackground
        source={{
          uri: channel.bannerImage ?? "https://via.placeholder.com/1200x300",
        }}
        style={styles.banner}
        imageStyle={styles.bannerImage}
      />

      {/* Channel header card area */}
      <View style={styles.header}>
        {/* Row: avatar + title area */}
        <View style={styles.topRow}>
          <Image source={{ uri: channel.profileImage }} style={styles.avatar} />

          <View style={styles.nameBlock}>
            <Text style={styles.channelName}>{channel.name}</Text>

            {/* Handle */}
            <Text style={styles.handle}>@{channel.handle ?? "channel"}</Text>

            {/* Subs + videos */}
            <Text style={styles.meta}>
              {channel.subscriberCount ?? "1.2M"} subscribers •{" "}
              {channel.videoCount ?? "73"} videos
            </Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description} numberOfLines={2}>
          {channel.description}
        </Text>

        {/* Link (optional) */}
        {!!channel.link && (
          <Text style={styles.link} numberOfLines={1}>
            {channel.link}
          </Text>
        )}

        {/* Buttons */}
        <View style={styles.actionsRow}>
          <View style={styles.subscribeBtn}>
            <Text style={styles.subscribeText}>Subscribe</Text>
          </View>

          <View style={styles.communityBtn}>
            <Text style={styles.communityText}>Community</Text>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        <Text style={styles.tabActive}>Home</Text>
        <Text style={styles.tab}>Videos</Text>
        <Text style={styles.tab}>Shorts</Text>
        <Text style={styles.tab}>Live</Text>
        <Text style={styles.tab}>Playlists</Text>
      </View>

      {/* For You */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>For You</Text>

        <FlatList
          data={forYouVideos}
          keyExtractor={(item: any) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }: any) => (
            <HorizontalVideoCard
              title={item.title}
              thumbnailUrl={item.thumbnail}
              channelId={item.channelId}
            />
          )}
        />
      </View>

      {/* Videos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Videos</Text>

        <FlatList
          data={channelVideos}
          keyExtractor={(item: any) => item.id}
          scrollEnabled={false}
          renderItem={({ item }: any) => (
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
    </ScrollView>
  );
};

export default ChannelPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  banner: {
    width: "100%",
    height: 140,
    backgroundColor: "#ccc",
  },

  bannerImage: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  header: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "white",
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
    backgroundColor: "#ddd",
  },

  nameBlock: {
    flex: 1,
  },

  channelName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  handle: {
    color: "#666",
    marginTop: 2,
  },

  meta: {
    color: "#666",
    marginTop: 4,
  },

  description: {
    color: "#444",
    marginTop: 10,
  },

  link: {
    color: "#0a66c2",
    marginTop: 6,
  },

  actionsRow: {
    flexDirection: "row",
    marginTop: 12,
  },

  subscribeBtn: {
    flex: 1,
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 22,
    alignItems: "center",
  },

  subscribeText: {
    color: "#fff",
    fontWeight: "bold",
  },

  communityBtn: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#eee",
    paddingVertical: 10,
    borderRadius: 22,
    alignItems: "center",
  },

  communityText: {
    color: "#000",
    fontWeight: "bold",
  },

  tabsRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 8,
    gap: 18,
    backgroundColor: "white",
  },

  tab: {
    color: "#666",
    fontWeight: "500",
  },

  tabActive: {
    color: "#000",
    fontWeight: "700",
  },

  section: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});