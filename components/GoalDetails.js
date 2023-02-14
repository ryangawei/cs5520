import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function GoalDetails({ route }) {
  const navigation = useNavigation();

  console.log(route);
  return (
    <View>
      <Text>{route.params.goal.id} - {route.params.goal.text}</Text>
      <Button title="More details" onPress={() => navigation.navigate("GoalDetails", {"goal": route.params.goal})} />
    </View>
  )
}