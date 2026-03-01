import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type shortProps = {
    id: string;
    title: string;
    thumbnail: string;
    channelId: string;
    description?: string;
    remixCount: string;
    likes?: string;
    comments?: string;

}

const ShortsCard = (props: shortProps) =>{ 
    return(
        <View style={styles.container}>
            <Image
                source={{ uri: props.thumbnail }}
                style={StyleSheet.absoluteFill}
                resizeMode="cover"
            />
            <Text>{props.title}</Text>
            <View style={styles.rightButtons}>

                <TouchableOpacity style={styles.actionButtons}>
                    <Ionicons name="heart" size={24} color="red" />
                    <Text style={styles.actionText}>{props.likes}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButtons}>
                    <Ionicons name="chatbubble-ellipses" size={24} color="white" />
                    <Text style={styles.actionText}>{props.comments}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButtons}>
                    <Ionicons name="repeat" size={24} color="white" />
                    <Text style={styles.actionText}>{props.remixCount}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ShortsCard;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 'auto',
        aspectRatio: 9 / 16,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 16,
    },
    rightButtons: {
        position: "absolute",
        right: 16,
        bottom: 90,
        alignItems: "center",
        marginBottom: 20,
    },
    actionButtons: {
        alignItems: "center",
        gap: 4,
    },
    actionText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
})