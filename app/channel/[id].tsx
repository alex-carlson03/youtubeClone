import { Stack, useLocalSearchParams } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import VideoCard from "../../components/videoCard";
import channelsData from "../../data/channels.json";
import videoData from "../../data/videos.json";

const CHANNEL_TABS = ["Home", "Videos", "Shorts", "Live", "Podcasts"];

const ChannelPage = () => {
  const { id } = useLocalSearchParams();

  const channel = channelsData.channels.find(
    (c) => String(c.id) === String(id),
  );

  if (!channel) {
    return (
      <View style={styles.container}>
        <Text>Channel not found!</Text>
      </View>
    );
  }

  const channelVideos = videoData.videos.filter(
    (video) => String(video.channelId) === String(channel.id),
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Stack.Screen options={{ title: channel.name }} />

      {channel.bannerImage && (
        <Image source={{ uri: channel.bannerImage }} style={styles.banner} />
      )}

      <View style={styles.header}>
        <Image
          source={{ uri: channel.profileImage }}
          style={styles.bigAvatar}
        />
        <Text style={styles.channelName}>{channel.name}</Text>
        <Text style={styles.subscriberCount}>
          {channel.subscriberCount} subscribers
        </Text>
        <Text style={styles.description}>{channel.description}</Text>

        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabRow}
      >
        {CHANNEL_TABS.map((tab, index) => (
          <TouchableOpacity key={tab} style={styles.tabButton}>
            <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>
              {tab}
            </Text>
            {index === 0 && <View style={styles.activeTabLine} />}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.videoSection}>
        {channelVideos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            thumbnailUrl={video.thumbnail}
            views={video.views}
            uploaded={video.uploaded}
            channelId={video.channelId}
          />
        ))}
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
  },
  header: {
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "white",
  },
  bigAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  channelName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  subscriberCount: {
    fontSize: 15,
    color: "#666",
    marginBottom: 8,
  },
  description: {
    color: "#444",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
  },
  subscribeButton: {
    backgroundColor: "#000",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 24,
  },
  subscribeButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  tabRow: {
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  tabButton: {
    marginRight: 24,
    paddingTop: 14,
    paddingBottom: 12,
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "700",
  },
  activeTabLine: {
    marginTop: 8,
    height: 3,
    width: 28,
    backgroundColor: "#000",
    borderRadius: 2,
  },
  videoSection: {
    paddingTop: 8,
    paddingBottom: 24,
  },
});
