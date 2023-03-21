import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { auth } from '../Firebase/firebase-setup';
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  function onLogin() {
    navigation.replace("Login");
  }

  async function onSignup() {
    if (password != confirmPassword || password.length == 0) {
      Alert.alert('Password', 'Passwords are inconsistent', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

    try {
      console.log("Registering...");
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Register successfully!");
      const user = userCredential.user;

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    }
    
  }

  return (
    <View>
      <Text>Email</Text>
      <TextInput 
        value={email}
        onChangeText={(newValue) => { setEmail(newValue); }}
      />
      <Text>Password</Text>
      <TextInput 
        value={password}
        onChangeText={(newValue) => { setPassword(newValue); }}
        secureTextEntry={true}
      />
      <Text>Confirm password</Text>
      <TextInput 
        value={confirmPassword}
        onChangeText={(newValue) => { setConfirmPassword(newValue); }}
        secureTextEntry={true}
      />

      <Button title="Register" onPress={onSignup}></Button>
      <Button title="Go back to login" onPress={onLogin}></Button>

    </View>
  )
}