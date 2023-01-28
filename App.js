import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topContainer}>
        <Header appName="Welcome to CS 5520 class" style={styles.header} />
        <Button title="Add task" onPress={() => { setModalVisible(true); }}></Button>
      </View>

      <Input textUpdateFunction={onTextEnter} modalVisible={modalVisible} onCancel={onCancel} />

      <View style={styles.bottomContainer}>
        <Text style={styles.text}>{enteredText}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    borderColor: "mediumorchid",
    borderWidth: 1,
    padding: 10,
    color: "mediumorchid",
    fontSize: 20
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#f51251",
    alignItems: "center"
  },
  text: {
    borderRadius: 0.5
  }
});
