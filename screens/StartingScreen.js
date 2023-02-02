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
import { colors } from "../colors";


export default function StartingScreen({ setScreen, email, setEmail, number, setNumber }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <SignUpCard setScreen={setScreen} email={email} setEmail={setEmail} number={number} setNumber={setNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    alignItems: "center",
    color: colors.title,
    fontSize: 30,
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: colors.titleBorder
  },
});
