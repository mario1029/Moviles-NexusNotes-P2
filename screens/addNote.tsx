import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button, Platform} from 'react-native';
import {Colors, styles} from '../components/styles';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const addNote = ()=>{
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [image, setImage] = React.useState("");

    const [isPickerShow, setIsPickerShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date());

    const showPicker = () => {
        setIsPickerShow(true);
      };
    
      const onChange = (event:any, value:any) => {
        if(value !== undefined){
            console.log(value)
            let fecha = new Date(value.toLocaleString());
            alert(fecha);
            setDate(fecha)
        }
        if (Platform.OS === 'android') {
          setIsPickerShow(false);
        }
      };

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
          console.log('Hola:',image);
        }
      };

    const submit = async ()=>{
        console.log('Se envia la nota:', title)
        console.log('Content:\n',content)
        console.log('Image:',image)
        console.log('Date:',date)

        //aqui va el fetch a la api
    }

    return (
        <ScrollView>
            <View style={styles.containerGeneral}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Create Note</Text>
                </View>
                <View style={styles.containerMiddle}>
                    <Text style={styles.text}>Title:</Text>
                        <TextInput
                            style={styles.input}
                            autoCompleteType="off"
                            onChangeText={setTitle}
                            value={title}
                            placeholder="Tarea #1!!"
                            keyboardType="default"
                            textAlign="center"
                        />
                    <Text style={styles.text}>Content:</Text>
                    <TextInput
                        style={styles.content}
                        autoCompleteType="off"
                        onChangeText={setContent}
                        value={content}
                        placeholder="Esta es mi primera nota!"
                        keyboardType="default"
                        textAlignVertical="top"
                    />
                    <Text style={styles.text}>Image(Opcional):</Text>
                    <View>
                        {image !== '' ?
                            (<>
                            <View style={styles.conteinerTop}>
                                <TouchableOpacity onPress={pickImage}>
                                    <Image
                                        source={{ uri: image !== '' ? image : 'https://picsum.photos/id/237/200/300'}}
                                        style={styles.logo}
                                    />
                                </TouchableOpacity>
                            </View></>)
                        : (<>
                            <View style={styles.conteinerTop}>
                                <TouchableOpacity onPress={pickImage} style={styles.button}>
                                    <Text style={styles.buttonText}>Dar imagen</Text>
                                </TouchableOpacity>
                            </View></>)
                        }
                        <Text style={styles.text}>Date Limit:</Text>
                        {/* Fecha seleccionada */}
                        <View style={styles.conteinerTop}>
                            <TouchableOpacity onPress={showPicker}>
                                <View style={styles.pickedDateContainer}>
                <                   Text style={styles.pickedDate}>{date.toLocaleString()+''}</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                        {/* The date picker */}
                        {isPickerShow && (
                            <DateTimePicker
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onChange}
                            style={styles.datePicker}
                            />
                        )}
                        <View style={styles.conteinerTop}>
                            <TouchableOpacity onPress={submit} style={styles.button}>
                                <Text style={styles.buttonText}>Creat Note</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default addNote;