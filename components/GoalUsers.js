import { View, Text, FlatList } from 'react-native'
import { useEffect, useState } from 'react'

export default function GoalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Get data here and update some state variables
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    async function getUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error("HTTP error happend");
        }
        // console.log("fetch request");
        const data = await response.json();
        // console.log(data);
        const nameArray = data.map((user) => {return user.name});
        // console.log(nameArray);
        setUsers(nameArray);
      } catch (err) {
        console.log("getUsers error:", err);
      }
      
    }
    getUsers();
  }, [])

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => {return <Text>{item}</Text>}}
        keyExtractor={item => item}
      />
    </View>
  )
}