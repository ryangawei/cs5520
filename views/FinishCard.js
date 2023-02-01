import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { colors } from "../colors";

export default function FinishCard({ setScreen, confirmed, email, number }) {
  const source = confirmed
    ? {
        uri: `https://picsum.photos/id/${number[number.length - 1]}/100/100`,
      }
    : require("../assets/face-sadness-smiley.png");

  const prompt = confirmed
    ? "Thank you for signing up. Here's a picture based on your phone number"
    : "Sorry to see you go.";

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Text style={styles.text}>{prompt}</Text>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={source}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    margin: 10,
    padding: 20,
    width: 300,
    borderRadius: 5,
  },
  text: {
    color: colors.text,
    fontSize: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  shadowProp:
    Platform.OS === "ios"
      ? {
          shadowColor: colors.shadowColor,
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }
      : {
          shadowColor: colors.shadowColor,
          elevation: 5,
        },
});
