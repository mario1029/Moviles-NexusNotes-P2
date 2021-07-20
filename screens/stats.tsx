import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button, Platform,RefreshControl} from 'react-native';
import {Colors, styles} from '../components/styles';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useEffect } from 'react';
import { estadisticas } from '../interfaces/estadisticas';
import { estadisticasGenerales } from '../comm/estadisticas';


const noteDetail = ({ navigation, route }:any)=>{
    
    const [existentes, setExistentes] = React.useState(0);
    const [completadas, setCompletadas] = React.useState(0);
    const [refresh, setRefresh]= React.useState(false);

    useEffect(()=>{
       //Aqui se guardan los valores de route dentro de las variables
       estadisticaGeneral();
    }, [])

    const estadisticaGeneral= async()=>{
        const estadistica:estadisticas= await estadisticasGenerales();
        setExistentes(estadistica.cantidadTotal);
        setCompletadas(estadistica.cantidadTotalCompletada)
        setRefresh(false);
    }

    const onRefresh= ()=>{
        // setLoading(true)
        setRefresh(true);
         estadisticaGeneral(); 
       }

    return (
        <ScrollView
            refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
        >
            <View style={styles.containerGeneral}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Stats</Text>
                </View>
                <View style={styles.containerMiddle}>
                    <Text style={styles.text}>User:{}</Text>
                    <Text style={styles.text}>Tasks Actual:{existentes}</Text>
                    <Text style={styles.text}>Tasks Complete:{completadas}</Text>
                    
                </View>
            </View>
        </ScrollView>
    )
}

export default noteDetail;