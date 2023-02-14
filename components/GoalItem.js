import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import PressableButton from './PressableButton';
import { useNavigation } from '@react-navigation/native';

export default function GoalItem({ item, deleteItem, goalItemPressed }) {
  const navigation = useNavigation();

  return (
    <View>
      <PressableButton
        onPress={(e) => goalItemPressed(e, item)}
        // android_ripple={{radius: 10}}
        style={styles.textContainer}
        >
          <Text style={styles.text}>{item.text}</Text>
          <Button title="Help" color={"black"} onPress={(e) => {}}></Button>
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