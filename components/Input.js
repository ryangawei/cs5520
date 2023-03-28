import { StyleSheet, Text, TextInput, View, Button, Modal, Image } from 'react-native';
import { useState } from "react";
import ImageManager from './ImageManager';

export default Input = ({ textUpdateFunction, modalVisible, onCancel }) => {
  const [text, setText] = useState("");
  const [imageUri, setImageUri] = useState("");

  function imageUriHandler(imageUri) {
    setImageUri(imageUri);
  }
  return (
    <Modal
      visible={modalVisible}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={
            // {uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png'}
            require("../assets/goal.png")
            } />
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => { 
            setText(text);
          }}
          placeholder="Type something..."
        />
        <ImageManager imageUriHandler={imageUriHandler} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Confirm" onPress={ () => {textUpdateFunction({"text": text, "imageUri": imageUri}); setText("");} } />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={ () => {onCancel();} } />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    margin: 10,
  }
});