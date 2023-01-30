import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function InputPrompt({ text }) {
  return (
    <View>
      <Text style={styles.inputPrompt}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputPrompt: {
    color: '#13005A',
    fontSize: 15,
  }
})