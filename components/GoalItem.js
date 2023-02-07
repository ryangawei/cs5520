import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'

export default function GoalItem({ item, deleteItem, goalItemPressed }) {
  
  return (
    <View>
      <Pressable
        onPress={(e) => goalItemPressed(e, item.id)}
        android_ripple={{radius: 10}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          }]}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.text}</Text>
            <Button title="X" color={"black"} onPress={(e) => { deleteItem(item.id) }}></Button>
          </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    backgroundColor: "#888",
    marginVertical: 5,
    padding: 5
  },
  text: {
    color: "#4510ff",
    fontSize: 30,
    marginRight: 8
  }
})