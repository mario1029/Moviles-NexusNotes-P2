import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import home from '../screens/home2';
import Header from '../components/header';
import addNote from '../screens/addNote';
import viewNotes from '../screens/viewNotes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationAction, NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'; 

const Stack = createStackNavigator();

const HomeStack = ({navigation}:any)=>{
    return(
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={home}  
            options={{
                headerTitle: () => <Header title='Nexus-Notes' navigation={navigation} />
          }}/>
          <Stack.Screen name="addnote" component={addNote}
           />
        </Stack.Navigator>
    );
}

// home stack navigator screens

export default HomeStack;