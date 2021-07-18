import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import home from './screens/home';
import addNote from './screens/addNote';
import viewNotes from './screens/viewNotes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'; 
import HomeStack from './router/homeStsck';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {


  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home">
          <Drawer.Screen name="home" component={HomeStack}/>
          <Drawer.Screen name="addnote" component={addNote}  />
          <Drawer.Screen name="note" component={viewNotes}  />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

