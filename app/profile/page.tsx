import HorizontalVideoCard from "@/components/horizontalVideoCard";
import ProfileHeader from "@/components/profileHeader";
import videoData from "@/data/videos.json";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const profile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ProfileHeader />
      <ScrollView>
        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: "https://picsum.photos/seed/user1/100/100" }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Joey Joester</Text>
          <Text style={styles.userEmail}>joey.joester@example.com</Text>
        </View>

        {/* Action Buttons */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.actionButtonRow}
        >
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="switch-account" size={20} color="black" />
            <Text style={styles.actionButtonText}>Switch account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Ionicons name="logo-google" size={20} color="black" />
            <Text style={styles.actionButtonText}>Google Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="tv" size={20} color="black" />
            <Text style={styles.actionButtonText}>Turn on incognito</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* History Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>History</Text>
          <TouchableOpacity style={styles.sectionHeaderButton}>
            <Text style={styles.actionButtonText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.historySection}>
          <FlatList
            horizontal
            style={styles.vidHistoryRow}
            showsHorizontalScrollIndicator={false}
            data={videoData.videos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <HorizontalVideoCard
                title={item.title}
                thumbnailUrl={item.thumbnail}
                channelId={item.channelId}
              />
            )}
          />
        </View>

        {/*Playlist section-Added the same section as history because they are identical with scrollability.*/}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Playlists</Text>
          <TouchableOpacity
            style={styles.sectionHeaderButton}
            onPress={() => {
              router.push("/profile/playlists");
            }}
          >
            <Text style={styles.actionButtonText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.historySection}>
          <FlatList
            horizontal
            style={styles.vidHistoryRow}
            showsHorizontalScrollIndicator={false}
            data={videoData.videos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <HorizontalVideoCard
                title={item.title}
                thumbnailUrl={item.thumbnail}
                channelId={item.channelId}
              />
            )}
          />
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="play-circle-outline" size={24} color="black" />
            <Text style={styles.menuItemText}>Your videos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="file-download" size={24} color="black" />
            <Text style={styles.menuItemText}>Downloads</Text>
            <Ionicons
              name="checkmark-circle"
              size={20}
              color="black"
              style={styles.checkmark}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons
              name="movie-outline"
              size={24}
              color="black"
            />
            <Text style={styles.menuItemText}>Movies & TV</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="content-cut" size={24} color="black" />
            <Text style={styles.menuItemText}>Clips</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
            <Text style={styles.menuItemText}>Playables</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="stars" size={24} color="black" />
            <Text style={styles.menuItemText}>Badges</Text>
          </TouchableOpacity>
        </View>

        {/* Get YouTube Premium */}
        <TouchableOpacity style={styles.premiumButton}>
          <Ionicons name="play-circle-outline" size={24} color="black" />
          <Text style={styles.menuItemText}>Get YouTube Premium</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileInfo: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 12,
    color: "gray",
  },
  actionButtonRow: {
    marginTop: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderColor: "#ddd",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    padding: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
  },
  actionButtonText: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 12,
  },
  historySection: {
    marginTop: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  sectionHeaderButton: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    marginRight: 15,
    marginTop: 10,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginBottom: 5,
    marginTop: 15,
  },
  vidHistoryRow: {
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  menuSection: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 24,
    flex: 1,
  },
  checkmark: {
    marginLeft: "auto",
  },
  premiumButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 30,
  },
});
