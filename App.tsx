import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import home2 from './screens/home2';
import addNote from './screens/addNote';
import viewNotes from './screens/viewNotes';
import Register from './screens/register';
import Login from './screens/login'
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
          <Drawer.Screen name="Home" component={HomeStack}/>
          <Drawer.Screen name="Addnote" component={addNote}  />
          <Drawer.Screen name="Notes" component={HomeStack}  />
          <Drawer.Screen name="Register" component={Register}  />
          <Drawer.Screen name="Login" component={Login}  />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

