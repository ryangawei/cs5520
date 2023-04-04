import { doc, collection, addDoc, deleteDoc, setDoc, getDoc } from "firebase/firestore"; 
import { db, auth } from "./firebase-setup";

export async function getUserLocation() {
  try {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("User location:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No user location found!");
      return null;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function saveUserLocation(location) {
  try {
    await setDoc(doc(db, "users", auth.currentUser.uid), location);
  } catch (err) {
    console.log(err);
  }

}

export async function writeToDB(doc) {
  try {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "goals"), {...doc, user: auth.currentUser.uid});
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
