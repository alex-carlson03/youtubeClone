import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import channelsData from "../../data/channels.json";

const ChannelPage = () => {
  const { id } = useLocalSearchParams();

  // find the specific channel data
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

  return (
    <View style={styles.container}>
      {/* Title */}
      <Stack.Screen options={{ title: channel.name }} />

      <View style={styles.header}>
        <Image
          source={{ uri: channel.profileImage }}
          style={styles.bigAvatar}
        />
        <Text style={styles.channelName}>{channel.name}</Text>
        <Text style={styles.description}>{channel.description}</Text>
      </View>

      {/* TODO: Add Videos later lol */}
    </View>
  );
};

export default ChannelPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  bigAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  channelName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
  },
});
