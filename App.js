import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // This function is called on Confirm
  function onTextEnter(text) {
    // console.log(text);
    setEnteredText(text);
    setModalVisible(false);
  }

  function onCancel() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Header appName="Welcome to CS 5520 class" />
      <Button title="Add task" onPress={() => { setModalVisible(true); }}></Button>
      <StatusBar style="auto" />
      <Input textUpdateFunction={onTextEnter} modalVisible={modalVisible} onCancel={onCancel} />
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
