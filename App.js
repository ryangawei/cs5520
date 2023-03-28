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
import { useState, useEffect } from "react";
import Home from "./components/Home";
import GoalDetails from "./components/GoalDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FontAwesome } from "@expo/vector-icons";
import { auth } from "./Firebase/firebase-setup";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

const Stack = createNativeStackNavigator();

const AuthStack = <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </>
;

const AppStack = <>
    <Stack.Screen
      options={({ navigation }) => {
        return {
          title: "All My Goals",
          headerRight: () => {
            return (
              <FontAwesome
                name="info"
                size={24}
                color="#eee"
                onPress={() => navigation.navigate("Profile")}
              />
            );
          },
        };
      }}
      name="Home" component={Home} />
    <Stack.Screen name="GoalDetails" component={GoalDetails} />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerRight: () => {
          return (
            <FontAwesome
              name="sign-out"
              size={24}
              color="#eee"
              onPress={() => {
                signOut(auth);
              }}
            />
          );
        },
      }}
    />
  </>
;

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        // User is signed out
        setIsAuthenticated(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "green" },
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 30 },
        }}
      >
        { isAuthenticated? AppStack : AuthStack }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
