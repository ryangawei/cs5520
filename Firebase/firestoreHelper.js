import { doc, collection, addDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./firebase-setup";

export async function writeToDB(doc) {
  try {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "goals"), doc);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(key) {
  try {
    await deleteDoc(doc(db, "goals", key));
    console.log("Document deleted with ID: ", key);
  } catch (err) {
    console.log(err);
  }
}
