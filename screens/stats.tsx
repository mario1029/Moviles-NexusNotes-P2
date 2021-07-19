import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button, Platform} from 'react-native';
import {Colors, styles} from '../components/styles';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useEffect } from 'react';


const noteDetail = ({ navigation, route }:any)=>{
    
    useEffect(()=>{
       //Aqui se guardan los valores de route dentro de las variables
       
    }, [])

    return (
        <ScrollView>
            <View style={styles.containerGeneral}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Stats</Text>
                </View>
                <View style={styles.containerMiddle}>
                    <Text style={styles.text}>User:{route.params.title}</Text>
                    <Text style={styles.text}>Daily Tasks Complete:{route.params.title}</Text>
                    <Text style={styles.text}>Monthly Tasks Complete:{route.params.title}</Text>
                    
                </View>
            </View>
        </ScrollView>
    )
}

export default noteDetail;