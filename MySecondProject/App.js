import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

function MyApp() {

  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS 340!
        </Text>
    </View>

  );
}

export default function multiComp(){
  return(    <View style = {{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Text>{"\n\n\n\n\n\n"} Welcome to my class</Text>
    <MyApp/>
    <MyApp/>
    <MyApp/>
    <MyApp/>
  </View>)
 
}

