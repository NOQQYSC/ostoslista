import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Alert, TextInput, Image, Text, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [thing, setThing] = useState('');
  const [data, setData] = useState([]);

  function addToList() {
    setData([...data, { key: String(data.length), text: thing }]);
    setThing('');
  }

  function clear() {
    setData([])
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Write" onChangeText={text => setThing(text)} value={thing}/>
      <View style={styles.buttons}>
      <Button onPress={addToList} title="Add" />
      <Button onPress={clear} title="Clear" />
      </View>

      
        <FlatList
          ListHeaderComponent={() => <Text style={{ color: 'blue' }}>Shopping List</Text>}
          data={data}
          renderItem={({ item }) => <Text>{item.text}</Text>}
        />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 100
  },

buttons: {
  
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'space-around'

},

  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
    
  }
});
