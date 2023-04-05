import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, Snapshot, query, where } from "firebase/firestore";
import Header from './Header';
import Input from './Input';
import GoalItem from './GoalItem';
// import { firestore } from '../Firebase/firebase-setup';
import { deleteFromDB, writeToDB } from '../Firebase/firestoreHelper';
import { db, auth, storage } from "../Firebase/firebase-setup";
import { ref, uploadBytesResumable } from "firebase/storage";
import * as Notifications from "expo-notifications";
import { verifyPermissions } from './NotificationManager';

export default function Home({ navigation }) {
  const [enteredText, setEnteredText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    async function getToken() {
      try {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
          return; // return early if no permission
        }

        const token = await Notifications.getExpoPushTokenAsync();
        console.log("Expo push token:", token);
        return token;
      } catch (error) {
        console.log(error);
      }
    }

    getToken();


    const unsubscribe = onSnapshot(
      query(collection(db, "goals"), where("user", "==", auth.currentUser.uid)),
      (querySnapshot) => {
        let docs = [];
        if (querySnapshot.empty) {
          // no data
        } else {
          // console.log(querySnapshot)
          querySnapshot.docs.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
        }

        console.log(docs);
        setGoals(docs);
      },
      (error) => {
        console.log("onSnapshot error:", error);
      }
    );

    return () => {unsubscribe()};
  }, []);

  async function fetchImageData(uri) {
    // console.log(uri);
    const response = await fetch(uri);
    const blob = await response.blob();

    const imageName = uri.substring(uri.lastIndexOf('/') + 1); 
    const imageRef = await ref(storage, `images/${imageName}`);
    const uploadResult = await uploadBytesResumable(imageRef, blob);

    return uploadResult.metadata.fullPath;
  }
  
  // This function is called on Confirm
  async function onTextEnter(dataFromInput) {
    let g = { text: dataFromInput.text };

    let imageUri = dataFromInput.imageUri;
    if (dataFromInput.imageUri) {
      imageUri = await fetchImageData(imageUri);
      g = { ...g, imageUri: imageUri };
    }
    // console.log(text);
    // setEnteredText(text);
    setGoals((prevGoals) => setGoals([...prevGoals, g]));
    writeToDB(g);
    setModalVisible(false);
  }

  function onCancel() {
    setModalVisible(false);
  }

  function deleteItem(id) {
    // setGoals((prevGoals) => setGoals(prevGoals.filter(item => item.id != id)));
    deleteFromDB(id);
  }

  function goalItemPressed(e, goal) {
    console.log(`Goal item ${goal} pressed!`);
    navigation.navigate("GoalDetails", {"goal": goal});
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topContainer}>
        <Header appName="Welcome to CS 5520 class" />
        <Button title="Add task" onPress={() => { setModalVisible(true); }}></Button>
      </View>

      <Input textUpdateFunction={onTextEnter} modalVisible={modalVisible} onCancel={onCancel} />

      <View style={styles.bottomContainer}>
        <FlatList
          contentContainerStyle={styles.scrollViewContentContainer}
          data={goals}
          renderItem={({ item }) => { 
            console.log(item); 
            return (
              <GoalItem item={item} deleteItem={deleteItem} goalItemPressed={goalItemPressed}/>
            ) 
            }}>
        </FlatList>
      {/* <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        { 
          goals.map((g) => { 
          return (
            <View key={g.id} style={styles.textContainer}>
              <Text style={styles.text}>{g.text}</Text> 
            </View>
          )
        }) 
        }
      </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#f51251",
  },
  scrollViewContentContainer: {
    alignItems: "center"
  },
  textContainer: {
    borderRadius: 5,
    backgroundColor: "#888",
    marginVertical: 5,
    padding: 5
  },
  text: {
    color: "#4510ff",
    fontSize: 30
  }
});