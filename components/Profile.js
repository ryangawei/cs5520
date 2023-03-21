import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { auth } from "../Firebase/firebase-setup";

const user = auth.currentUser;

export default function Profile() {

  useEffect(() => {
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }
  }, [])
  
  return (
    <View>
      <Text>{user.displayName}</Text>
      <Text>{user.uid}</Text>
    </View>
  )
}