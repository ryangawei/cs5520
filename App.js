import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView } from 'react-native';
import { useState } from 'react';
import StartingScreen from './screens/StartingScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StartingScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86A3B8',
  }
});
