import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";
import GoalUsers from "./GoalUsers";

export default function GoalDetails({ route, navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.goal.text,
      headerRight: () => {
        return (
          <PressableButton
            onPress={() => {
              console.log("Press top-right help");
            }}
          >
            <AntDesign name="questioncircleo" size={24} color="black" />
          </PressableButton>
        );
      },
    });
  }, []);

  console.log(route);
  return (
    <View>
      {route.params && (
        <Text>
          {route.params.goal.id} - {route.params.goal.text}
        </Text>
      )}
      <GoalUsers />
      <Button
        title="More details"
        onPress={() =>
          navigation.navigate("GoalDetails", { goal: route.params.goal })
        }
      />
    </View>
  );
}
