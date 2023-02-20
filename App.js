import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import Home from "./components/Home";
import GoalDetails from "./components/GoalDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "green" },
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 30 },
        }}
      >
        <Stack.Screen
          options={{ title: "All my goals" }}
          name="Home"
          component={Home}
        ></Stack.Screen>
        {/* Configuring Screen options dynamically */}
        <Stack.Screen
          name="GoalDetails"
          component={GoalDetails}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
