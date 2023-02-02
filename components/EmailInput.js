import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import InputPrompt from "./InputPrompt";
import { colors } from "../colors";

export default function EmailInput({ value, onChangeText, showPrompt }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email address</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="email-address"
      ></TextInput>
      {showPrompt ? <InputPrompt text="Please enter a valid email" /> : <></> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    color: colors.text,
    fontSize: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    textAlign: "center"
  }
});
