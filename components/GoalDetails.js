import { View, Text, Button, Image } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";
import GoalUsers from "./GoalUsers";
import { getDownloadURL, ref } from "firebase/storage";
import { db, auth, storage } from "../Firebase/firebase-setup";

export default function GoalDetails({ route, navigation }) {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    async function getImageURL() {
      try {
        const url = await getDownloadURL(
          ref(storage, route.params.goal.imageUri)
        );
        // console.log(url);
        setImageURL(url);
      } catch (error) {
        console.log(error);
      }
    }
    getImageURL();
  }, []);

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
      {imageURL !== "" && (
        <Image source={{ uri: imageURL }} style={{ width: 200, height: 200 }} />
      )}
      <Button
        title="More details"
        onPress={() =>
          navigation.navigate("GoalDetails", { goal: route.params.goal })
        }
      />
    </View>
  );
}
