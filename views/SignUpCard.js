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
import { colors } from "../colors";

export default function SignUpCard({ setScreen, setEmail, setNumber }) {
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [showNumberPrompt, setShowPhonePrompt] = useState(false);
  const [emailText, setEmailText] = useState("");
  const [numberText, setNumberText] = useState("");

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
    const emailFlag = checkEmail(emailText);
    const numberFlag = checkNumber(numberText);

    if (emailFlag && numberFlag) {
      setScreen("confirm");
    }
    else {
      emailFlag? setShowEmailPrompt(false) : setShowEmailPrompt(true);
      numberFlag? setShowPhonePrompt(false) : setShowPhonePrompt(true);
    }
  }

  const onReset = (e) => {
    setShowEmailPrompt(false);
    setShowPhonePrompt(false)
    setEmail("");
    setNumber("");
  }

  return (
    <View style={[styles.inputsContainer, styles.shadowProp]}>
    <EmailInput value={emailText} onChangeText={(text) => {setEmail(text); setEmailText(text);}} showPrompt={showEmailPrompt} />
    <PhoneInput value={numberText} onChangeText={(text) => {setNumber(text); setNumberText(text);}} showPrompt={showNumberPrompt} />
    <View style={styles.buttonsContainer}>
      <View style={styles.button}>
        <Button style={styles.button} color="red" title="Reset" onPress={onReset} />
      </View>
      <View style={styles.button}>
        <Button title="Sign up" onPress={onSignUp} />
      </View>
    </View>

  </View>
  )
}


const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    color: colors.title,
    fontSize: 30,
    padding: 10,
    marginBottom: 10,
  },
  inputsContainer: {
    backgroundColor: colors.cardBackground,
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
  button: {
    marginHorizontal: 25,
  },

  shadowProp:
    Platform.OS === "ios"
      ? {
          shadowColor: colors.shadowColor,
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }
      : {
        shadowColor: colors.shadowColor,
        elevation: 5,
      },

});