import { StyleSheet, Text, TextInput, View } from 'react-native';
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
          textUpdateFunction(text);
          setText(text);
        }}
      />
      <Text>{text}</Text>
    </View>
  )
}