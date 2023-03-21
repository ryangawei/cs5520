import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase-setup';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successfully!");
      const user = userCredential.user;

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    }
  }

  function onSignup() {
    navigation.replace("Signup");
  }

  return (
    <View>
      <Text>Email</Text>
      <TextInput 
        value={email}
        onChange={(newValue) => { setEmail(newValue); }}
      />
      <Text>Password</Text>
      <TextInput 
        value={password}
        onChange={(newValue) => { setPassword(newValue); }}
        secureTextEntry={true}
      />

      <Button title="Login" onPress={onLogin}></Button>
      <Button title="Sign up for new account" onPress={onSignup}></Button>

    </View>
  )
}