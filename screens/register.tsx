import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Colors, styles} from '../components/styles'

const Register = ()=>{
    const [usuario, setUsuario] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [email, setEmail] = React.useState("");

    const submit = async ()=>{
        console.log('Se envia el registro con',usuario, pass, email)
        //aqui va el fetch a la api
    }

    return (
        <View style={styles.containerGeneral}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Register</Text>
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
                <Text style={styles.text}>Username:</Text>
                <TextInput
                    style={styles.input}
                    autoCompleteType="username"
                    onChangeText={setUsuario}
                    value={usuario}
                    placeholder="Usuario: mario1029"
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

export default Register;