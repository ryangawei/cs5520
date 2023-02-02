import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import { colors } from '../colors';

export default function ConfirmCard({ setScreen, setConfirmed, email, number }) {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Text style={styles.text}>You have entered:</Text>
      <Text>{email}</Text>
      <Text>{number}</Text>
      <Text>Please confirm if they are correct.</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button color="red" title="Go back" onPress={() => {setScreen("start")}} />
        </View>
        <View style={styles.button}>
          <Button title="Confirm" onPress={() => {setScreen("finish"); setConfirmed(true);}} />
        </View>
        <View style={styles.button}>
          <Button title="Finish later" onPress={() => {setScreen("finish")}} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    margin: 10,
    padding: 20,
    width: 300,
    borderRadius: 5,
  },
  text: {
    color: colors.text,
    fontSize: 20,
  },
  buttonsContainer: {
    alignContent: 'center',
    margin: 10,
    padding: 20,
  },
  button: {
    marginVertical: 10,
  },
  shadowProp:
    Platform.OS === "ios"
      ? {
          shadowColor: colors.shadowColor,
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }
      : {
        shadowColor: colors.shadowColor,
        elevation: 5,
      },

});