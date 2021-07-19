import {StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#6D28D9',
    green: '#10B981',
    red: '#EF4444',
  };
  
  export const styles = StyleSheet.create({
    containerCenter: {
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
      
      margin:15
    },
    button:{
      backgroundColor:'#000',
      padding: 7,
      marginTop: 10,
      width: 150,
    },
    buttonText:{
      color: 'white',
      fontSize: 20,
      textAlign: "center",
    },
    containerTitle: {
        padding: 24,
        backgroundColor: "#AD20A5"
      },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#ffffff",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },
      containerGeneral:{
        backgroundColor: '#AD20A5',
        flex: 1,
      },
      containerMiddle:{
        backgroundColor: '#AD20A5',
        padding: 24,
      },
      input: {
        height: 40,
        borderWidth: 2,
        backgroundColor: '#ffffff',
        fontSize: 20,
      },
      conteinerTop:{
        backgroundColor: '#AD20A5',
        alignItems: 'center',
        justifyContent: 'center',
      },
      content:{
        height: 240,
        borderWidth: 2,
        backgroundColor: '#ffffff',
        fontSize: 20,
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 50,
      },
      pickedDateContainer: {
        padding: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
        borderWidth: 3,
      },
      pickedDate: {
        fontSize: 18,
        color: 'black',
      },
      btnContainer: {
        padding: 30,
      },
      // This only works on iOS
      datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
  });
