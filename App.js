import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView, Dimensions } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import { colors } from './colors';


export default function App() {
  const [screen, setScreen] = useState("start");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  let bgColors;
  let containerStyle;
  let screenView;
  switch(screen) {
    case "start":
      bgColors = colors.startBackground;
      containerStyle = styles.start;
      screenView = <StartingScreen setScreen={setScreen} email={email} setEmail={setEmail} number={number} setNumber={setNumber} />;
      console.log("Start screen")
      break;
    case "confirm":
      bgColors = colors.confirmBackground;
      containerStyle = styles.confirm;
      screenView = <ConfirmScreen setScreen={setScreen} email={email} number={number}/>;
      console.log("Confirm screen")
      break;
    case "finish":
      bgColors = colors.finishBackground;
      containerStyle = styles.finish;
      console.log("Finish screen")
      break;
    default:
      bgColors = colors.startBackground;
      containerStyle = styles.start;
      screenView = <StartingScreen setScreen={setScreen} />;
  }

  return (
    <LinearGradient style={styles.background}
        // Background Linear Gradient
        colors={bgColors}
      >
      <SafeAreaView style={containerStyle}>
        {screenView}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  start: {
    flex: 1,
  },
  confirm: {
    flex: 1,
  },
  finish: {
    flex: 1
  }
});
