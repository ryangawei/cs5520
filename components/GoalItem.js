import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import PressableButton from './PressableButton';

export default function GoalItem({ item, deleteItem, goalItemPressed }) {
  
  return (
    <View>
      <PressableButton
        onPress={(e) => goalItemPressed(e, item.id)}
        // android_ripple={{radius: 10}}
        style={styles.textContainer}
        >
          <Text style={styles.text}>{item.text}</Text>
          {/* <Button title="X" color={"black"} onPress={(e) => { deleteItem(item.id) }}></Button> */}
          <MaterialIcons name="delete" size={24} color="black"  onPress={(e) => { deleteItem(item.id) }} />
      </PressableButton>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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