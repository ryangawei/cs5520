import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Map() {
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
          latitude: 37.78825,
          longitude: -122.4324,
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
      {selectedLocation && (
        <Button
          title="Confirm selected location"
          onPress={() =>
            navigation.navigate("Profile", {
              selectedLocation: selectedLocation,
            })
          }
        />
      )}
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
