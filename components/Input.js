import { StyleSheet, Text, TextInput, View, Button, Modal, Image } from 'react-native';
import { useState } from "react";

export default Input = ({ textUpdateFunction, modalVisible, onCancel }) => {
  const [text, setText] = useState("");
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
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
          value={text}
          onChangeText={(text) => { 
            setText(text);
          }}
        />
        <Button title="Confirm" onPress={ () => {textUpdateFunction(text); setText("");} } />
        <Button title="Cancel" onPress={ () => {onCancel();} } />
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
});