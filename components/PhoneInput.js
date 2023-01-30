import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import InputPrompt from './InputPrompt';

export default function PhoneInput({  value, onChangeText, showPrompt }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phone number</Text>
      <TextInput style={styles.input} value={value}
        onChangeText={onChangeText}
        keyboardType="phone-pad"></TextInput>
        { showPrompt ? <InputPrompt text="Please enter a valid phone number" /> : <></> }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    color: '#13005A',
    fontSize: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    textAlign: "center"
  },
});
