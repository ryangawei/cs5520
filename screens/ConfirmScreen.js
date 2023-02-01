import {
  StyleSheet,
  Text,
  View,
  Modal
} from "react-native";
import { colors } from "../colors";
import { useState } from "react";
import ConfirmCard from "../views/ConfirmCard";

export default function ConfirmScreen({ setScreen, email, number }) {
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
          <ConfirmCard setScreen={setScreen} email={email} number={number} />
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
