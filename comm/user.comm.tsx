import {Usuario,UsuarioCompleto} from '../interfaces/usuario'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login=async(usuario:UsuarioCompleto)=>{
    console.log(usuario)
    const response= await fetch(`https://registroweb2.herokuapp.com/session/user`,
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });
    const data= await response.json();
    return data;
}

export const logout= async()=>{
    const response= await fetch('https://registroweb2.herokuapp.com/session/logout',
    {
        method: 'GET'
    });
    const data= await response.json();
    console.log(data);
    await AsyncStorage.removeItem('login')
    return data;
}

export const register= async(usuario:UsuarioCompleto)=>{
    const response= await fetch('https://registroweb2.herokuapp.com/session/signup',
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });
    const data= await response.json();
    return data;
}