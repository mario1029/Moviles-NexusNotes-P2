import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { login, logout } from '../comm/user.comm';
import {Colors, styles} from '../components/styles'
import { UsuarioCompleto } from '../interfaces/usuario';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}:any)=>{
    const [pass, setPass] = React.useState("");
    const [email, setEmail] = React.useState("");

    const storeData = async (value:UsuarioCompleto) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('login', jsonValue)
          } catch (e) {
                console.log(e)
          }
    }

    const submit = async ()=>{
        console.log('Se envia el login con', pass, email)
        const usuario:UsuarioCompleto={
            correo:email,
            contrasenia:pass
        }
        const result= await login(usuario)            
        if(result.status==304){
            Alert.alert("Notificacion", result.response);
        }else if(result.status==400){
            Alert.alert("Error de credenciales", result.error.msg)
        }else{
            await storeData(usuario);
            Alert.alert(result.status)
            navigation.navigate('Notes');
            console.log(result)

        }
    }

    return (
        <View style={styles.containerGeneral}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.containerMiddle}>
                <Text style={styles.text}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        autoCompleteType="email"
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Correo: ejemplo@gmail.com"
                        keyboardType="default"
                        textAlign="center"
                    />
                <Text style={styles.text}>Password:</Text>
                <TextInput
                    style={styles.input}
                    autoCompleteType="password"
                    onChangeText={setPass}
                    value={pass}
                    placeholder="Clave: berserker123"
                    keyboardType="default"
                    textAlign="center"
                />
                <View style={styles.conteinerTop}>
                    <TouchableOpacity 
                        onPress={submit}
                        style={styles.button}
                        >
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;