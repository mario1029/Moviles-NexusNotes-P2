
import React from 'react';

import Notes from './screens/notes';
import addNote from './screens/addNote';
import Register from './screens/register';
import Login from './screens/login';
import NoteDetail from './screens/noteDetail';
import EditNote from './screens/editNote';
import Stats from './screens/stats';
import HomeStack from './router/homeStsck';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { logout } from './comm/user.comm';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {

  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home">
          <Drawer.Screen name="Home" component={HomeStack}/>
          <Drawer.Screen name="Addnote" component={addNote}  />
          <Drawer.Screen name="Notes" component={Notes}  />
          <Drawer.Screen name="Register" component={Register}  />
          <Drawer.Screen name="Login" component={Login}  />
          <Drawer.Screen name="NoteDetail" component={NoteDetail}  />
          <Drawer.Screen name="EditNote" component={EditNote}  />
          <Drawer.Screen name="Stats" component={Stats}  />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

