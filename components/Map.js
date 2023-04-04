import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Map({ route }) {
  const currentLocation = route.params? route.params.currentLocation : null;
  // console.log(route.params);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigation = useNavigation();

  return (
    <>
      <MapView
        onPress={(e) => {
          setSelectedLocation(e.nativeEvent.coordinate);
        }}
        style={styles.container}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {selectedLocation && (
          <>
            <Marker title="Picked Location" coordinate={selectedLocation} />
          </>
        )}
      </MapView>
      <Button
        disabled={!selectedLocation}
        title="Confirm selected location"
        onPress={() =>
          navigation.navigate("Profile", {
            selectedLocation: selectedLocation,
          })
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
