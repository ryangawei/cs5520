import {
  StyleSheet,
  Text,
  View,
  Modal
} from "react-native";
import { colors } from "../colors";
import { useState } from "react";
import ConfirmCard from "../views/ConfirmCard";

export default function ConfirmScreen({ setScreen, setConfirmed, email, number }) {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
        <View style={styles.container}>
          <ConfirmCard setScreen={setScreen} setConfirmed={setConfirmed} email={email} number={number} />
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
