import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const name = "CS 5520";
  const [enteredText, setEnteredText] = useState("");

  function onTextEnter(text) {
    // console.log(text);
    setEnteredText(text);
  }

  return (
    <View style={styles.container}>
      <Header appName="My header" />
      <StatusBar style="auto" />
      <Input textUpdateFunction={onTextEnter} />
      <Text>{enteredText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
