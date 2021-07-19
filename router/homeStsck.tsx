import React from 'react';
import notes from '../screens/notes';
import Header from '../components/header';
import addNote from '../screens/addNote';
import Register from '../screens/register';
import Login from '../screens/login'
import Home from '../screens/home'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

const HomeStack = ({navigation}:any)=>{
    const headerTitle = () =>{
        return(<Header title='Nexus-Notes' navigation={navigation} />)
    } 
    
    return(
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} options={{headerTitle}}/>
          <Stack.Screen name="notes" component={notes}/>
          <Stack.Screen name="addnote" component={addNote}/>
        </Stack.Navigator>
    );
}

// home stack navigator screens

export default HomeStack;