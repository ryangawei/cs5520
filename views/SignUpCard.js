import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import EmailInput from "../components/EmailInput";
import PhoneInput from "../components/PhoneInput";

export default function SignUpCard() {
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [showNumberPrompt, setShowPhonePrompt] = useState(false);

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  function checkEmail(text) {
    if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(text)) {
      return true;
    }
    return false;
  }

  function checkNumber(text) {
    if (/^[0-9]*$/.test(text) && text.length == 10) {
      return true;
    }
    return false;
  }

  const onSignUp = (e) => {
    checkEmail(email)? setShowEmailPrompt(false) : setShowEmailPrompt(true);
    checkNumber(number)? setShowPhonePrompt(false) : setShowPhonePrompt(true);
  }

  const onReset = (e) => {
    setShowEmailPrompt(false);
    setShowPhonePrompt(false)
    setEmail("");
    setNumber("");
  }

  return (
    <View style={[styles.inputsContainer, styles.shadowProp]}>
    <EmailInput value={email} onChangeText={setEmail} showPrompt={showEmailPrompt} />
    <PhoneInput value={number} onChangeText={setNumber} showPrompt={showNumberPrompt} />
    <View style={styles.buttonsContainer}>
      <Button color="red" title="Reset" onPress={onReset} />
      <Button title="Sign up" onPress={onSignUp} />
    </View>

  </View>
  )
}


const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    color: "#fff",
    fontSize: 30,
    padding: 10,
    marginBottom: 10,
  },
  inputsContainer: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 20,
    width: 300,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    margin: 10,
    padding: 20,
  },
  button: {},

  shadowProp:
    Platform.OS === "ios"
      ? {
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }
      : {},

});