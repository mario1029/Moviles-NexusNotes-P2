import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Note from './addNote';
import home from './home2';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const addNote=()=>{
    return(    
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={home} options={{ title: 'My home' }}/>
        <Drawer.Screen name="addnote" component={Note}  />
      </Drawer.Navigator>
    )

}

const addNote2 = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.frontbar}>
                <Text>Notas</Text>
            </View>
            <View>
                <Text>texto</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex:1,
        flexDirection:'column',
        backgroundColor: '#AD20A5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    frontbar:{
        flex: 10,
        backgroundColor: 'blue',
        justifyContent: 'flex-start',
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

export default addNote;