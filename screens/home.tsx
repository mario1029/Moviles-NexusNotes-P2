import React from 'react';
import {View, Text, Image
    , TextInput, TouchableOpacity} from 'react-native';
import {Colors, styles} from '../components/styles'
import { logout } from '../comm/user.comm';

const Home = ()=>{

    return (
        <View style={styles.containerCenter}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Welcome to Nexus-Notes</Text>
            </View>
            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
            />
            <View style={styles.conteinerTop}>
                    <TouchableOpacity 
                        onPress={logout}
                        style={styles.button}
                        >
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
        </View>
         )
}

export default Home;