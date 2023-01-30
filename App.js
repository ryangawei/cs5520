import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView, Dimensions } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StartingScreen from './screens/StartingScreen';
import { colors } from './colors';
let ScreenHeight = Dimensions.get("window").height;
// let ScreenHeight = Dimensions.get("window").height;


export default function App() {
  const [screen, setScreen] = useState("start");

  let bgColors;
  switch(screen) {
    case "start":
      bgColors = colors.startBackground;
      break;
    case "confirm":
      bgColors = colors.confirmBackground;
      break;
    case "finish":
      bgColors = colors.finishBackground;
      break;
    default:
      bgColors = colors.startBackground;
  }

  return (
    <LinearGradient style={styles.background}
        // Background Linear Gradient
        colors={bgColors}
      >
      <SafeAreaView style={styles.container}>
        <StartingScreen />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  }
});
