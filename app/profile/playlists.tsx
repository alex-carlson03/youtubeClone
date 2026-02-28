import PlaylistCard from "@/components/playlistCard";
import videoData from "@/data/videos.json";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FILTER_BUTTONS = [
  "Recently added",
  "Playlists",
  "Music",
  "Podcasts",
  "Gaming",
  "Courses",
];

const playlists = () => {
  const [activeFilter, setActiveFilter] = useState("Recently added");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={videoData.videos}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Text style={styles.headerText}>Playlists</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterRow}
            >
              {FILTER_BUTTONS.map((filter) => (
                <TouchableOpacity
                  key={filter}
                  onPress={() => setActiveFilter(filter)}
                  style={[
                    styles.filterButton,
                    activeFilter === filter && styles.filterButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,
                      activeFilter === filter && styles.filterTextActive,
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        }
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlaylistCard
            title={item.title}
            visibility={"public"}
            videoCount={10}
            thumbnailUrl={item.thumbnail}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default playlists;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  filterRow: {
    paddingHorizontal: 12,
    gap: 8,
    marginBottom: 12,
  },
  filterButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#ebebeb",
  },
  filterButtonActive: {
    backgroundColor: "#747474",
  },
  filterText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#0f0f0f",
  },
  filterTextActive: {
    color: "#fff",
  },
  listContainer: {
    paddingBottom: 100,
  },
});
