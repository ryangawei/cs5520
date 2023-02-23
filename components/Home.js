import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, Snapshot } from "firebase/firestore";
import Header from './Header';
import Input from './Input';
import GoalItem from './GoalItem';
// import { firestore } from '../Firebase/firebase-setup';
import { deleteFromDB, writeToDB } from '../Firebase/firestoreHelper';
import { db } from "../Firebase/firebase-setup";

export default function Home({ navigation }) {
  const [enteredText, setEnteredText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "goals"), (querySnapshot) => {
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
    });

    return () => {unsubscribe()};
  }, []);
  
  // This function is called on Confirm
  function onTextEnter(text) {
    console.log(text);
    // setEnteredText(text);
    const g = { text: text, id: Math.random() };
    setGoals((prevGoals) => setGoals([...prevGoals, g]));
    writeToDB({text: text});
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
        <Header appName="Welcome to CS 5520 class" style={styles.header} />
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
  header: {
    borderColor: "mediumorchid",
    borderWidth: 1,
    padding: 10,
    color: "mediumorchid",
    fontSize: 20
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