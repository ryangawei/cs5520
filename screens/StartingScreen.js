import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import SignUpCard from "../views/SignUpCard";


export default function StartingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <SignUpCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    alignItems: "center",
    color: "#fff",
    fontSize: 30,
    padding: 10,
    marginBottom: 10,
  },
});
