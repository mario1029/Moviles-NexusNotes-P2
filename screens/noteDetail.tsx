import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button, Platform, RefreshControl} from 'react-native';
import {Colors, styles} from '../components/styles';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useEffect } from 'react';
import { tareaDetallada } from '../interfaces/tarea';
import { detailTask } from '../comm/task.comm';


const noteDetail = ({ navigation, route }:any)=>{
    const [detail, setDetail] = React.useState({titulo:'',fechaVencimiento:'', pinear:false, completada:false, contenido:'', tipo:0}); 
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [image, setImage] = React.useState("");
    const [date, setDate] = React.useState(new Date());
    const [refresh, setRefresh]= React.useState(false);
    //console.log("route:"+route.params.title)

    const loadNotes = async ()=>{
        console.log(route.params.id)
        const notes:tareaDetallada = await detailTask(route.params.id);
        setDetail(notes)
        setTitle(detail.titulo)
        setContent(detail.contenido)
        setDate(new Date(detail.fechaVencimiento))
        setRefresh(false)
     //   setLoading(false);
        
    }

    const onRefresh= ()=>{
        // setLoading(true)
        setRefresh(true);
         loadNotes(); 
       }

    useEffect(()=>{
       //Aqui se guardan los valores de route dentro de las variables
            loadNotes()
    }, [])

    const editNote = (id:any)=>{
        let fecha = date.toLocaleString();
        navigation.navigate('EditNote', {detail})
    }

    const viewNotes = ()=>{
        navigation.navigate('Notes', {})
    }
        
    return (
        <ScrollView 
            refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
        >
            <View style={styles.containerGeneral}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Note</Text>
                </View>
                <View style={styles.containerMiddle}>
                    <Text style={styles.text}>Title:{detail.titulo}</Text>
                        
                    <Text style={styles.text}>Content:
                        {detail.contenido}
                    </Text>
                    <Text style={styles.text}>Image(Opcional):</Text>
                    <View>
                        {image !== '' ?
                            (<>
                            <View style={styles.conteinerTop}>
                                <Image
                                    source={{ uri: image !== '' ? image : 'https://picsum.photos/id/237/200/300'}}
                                    style={styles.logo}
                                />
                            </View></>)
                        : (<>
                            <View style={styles.conteinerTop}>
                                    <Text style={styles.buttonText}>No image</Text>
                            </View></>)
                        }
                        <Text style={styles.text}>Date Limit:</Text>
                        {/* Fecha seleccionada */}
                        <View style={styles.conteinerTop}>
                                <View style={styles.pickedDateContainer}>
                <                   Text style={styles.pickedDate}>{date.toLocaleString()+''}</Text>
                                </View>                            
                        </View>
                        <View style={styles.conteinerTop}>
                            <TouchableOpacity onPress={()=>{editNote(route.params.id)}} style={styles.button}>
                                <Text style={styles.buttonText}>Edit Note</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.conteinerTop}>
                            <TouchableOpacity onPress={viewNotes} style={styles.button}>
                                <Text style={styles.buttonText}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default noteDetail;