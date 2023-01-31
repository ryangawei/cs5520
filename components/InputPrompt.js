import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../colors'

export default function InputPrompt({ text }) {
  return (
    <View>
      <Text style={styles.inputPrompt}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputPrompt: {
    color: colors.text,
    fontSize: 15,
  }
})