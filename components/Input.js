import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from "react";

export default Input = ({ textUpdateFunction }) => {
  const [text, setText] = useState("");
  return (
    <View>
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
    </View>
  )
}