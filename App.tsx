import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import home from './screens/home';
import addNote from './screens/addNote';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={home}/>
        <Stack.Screen name="addNote" component={addNote}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AD20A5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
    fontSize: 30
  },
  logo:{
    height:200,
    width:200,
    resizeMode: 'contain'
  },
  button:{
    backgroundColor:'#000',
    padding: 7,
    marginTop: 10,
  },
  buttonText:{
    color: 'white',
    fontSize: 20
  }
});
