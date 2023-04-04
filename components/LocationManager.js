import { View, Text, Button, Image } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getUserLocation, saveUserLocation } from "../Firebase/firestoreHelper";
import { MAPS_API_KEY } from "@env";

export default function LocationManager() {
  const navigation = useNavigation();
  const route = useRoute();
  const [location, setLocation] = useState(null);
  const [status, requestPermission] = Location.useForegroundPermissions();

  useEffect(() => {
    async function fetchLocation () {
      const data = await getUserLocation();
      setLocation(data);
    }
    fetchLocation();
  }, []);

  useEffect(() => {
    if (route.params?.selectedLocation) {
      setLocation(route.params.selectedLocation);
    }
  }, [route]);

  async function verifyPermissions() {
    if (!status.granted) {
      const result = await requestPermission();
      if (!result.granted) {
        Alert.alert(
          "Insufficient permissions!",
          "You need to grant location permissions to use this app.",
          [{ text: "Okay" }]
        );
        return false;
      }
      return true;
    }
    return true;
  }

  async function getLocation() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return; // return early if no permission
    }
    try {
      console.log("Getting location...");
      let result = await Location.getCurrentPositionAsync();
      console.log(result);
      let location = { longitude: result.coords.longitude, latitude: result.coords.latitude }
      setLocation(location);
    } catch (error) {
      console.log(error);
    } 
  }

  async function saveUser() {
    // TODO:
    await saveUserLocation(location);
    navigation.navigate("Home");
  }


  return (
    <View>
      <Button
        title="Get location"
        onPress={getLocation}
      />
      { location &&
      <Image source={{ uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${ location.longitude}&key=${MAPS_API_KEY}` }} style={{ width: 200, height: 200 }} />
      }
      <Button title="Go to map" onPress={() => navigation.navigate("Map", {currentLocation: location})} />
      <Button title="Save location" onPress={() => saveUser()} />

    </View>
  );
}
