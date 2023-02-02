import {
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import { colors } from "../colors";
import { useState } from "react";
import FinishCard from "../views/FinishCard";

export default function FinishScreen({ setScreen, confirmed, onRestart, email, number }) {
  return (
    <View style={styles.container}>
      <FinishCard setScreen={setScreen} confirmed={confirmed} onRestart={onRestart} email={email} number={number} />
      <View style={styles.button}>
        <Button title="Start Again" onPress={onRestart}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    // margin: 5,
  },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   padding: 35,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
});
