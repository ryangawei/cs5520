import { View, Text, Button, Alert, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";


export default function ImageManager({ imageUriHandler }) {
  const [permissionInfo, requestPermission] = ImagePicker.useCameraPermissions();
  const [imageURL, setImageURL] = useState("");

  async function verifyPermission() {
    if (permissionInfo.granted == true) {
      return true;
    }
    const permissionResult = await requestPermission();
    return permissionResult.granted;
  }

  const takeImageHandler = async () => {
    const permissionReceived = await verifyPermission();
      if (!permissionReceived) {
        Alert.alert("You need to grant camera permission.")
        return;
      }

    try {
      const result = await ImagePicker.launchCameraAsync(
        {
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
        }
      );
      
      // console.log(result.assets[0]["uri"]);
      setImageURL(result.assets[0]["uri"]);
      imageUriHandler(result.assets[0]["uri"]);
    } catch (err) {
  
    }
  };

  return (
    <View>
      <Button title="Take a photo" onPress={takeImageHandler}></Button>
      {imageURL !== "" ? <Image source={{
        uri: imageURL
      }}
      style={{height: 150, width: 150}}
      /> : <></>}
      
    </View>
  );
}
