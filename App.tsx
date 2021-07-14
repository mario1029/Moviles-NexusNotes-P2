import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  const [image, setImage] = React.useState(''); 

  const pickImage = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(result.granted === false){
      alert('Permisos de Camara requeridos');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if(pickerResult.cancelled === true){
      return;
    }

    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri);
      console.log('Hola',image);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenidos a</Text>
      <Text style={styles.text}>Nexus-Notes</Text>
        <Image
          source={require('./assets/images/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity 
        onPress={pickImage}
        style={styles.button}
        >
          <Text style={styles.buttonText}>Dar imagen</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
