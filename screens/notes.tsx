import React, { useEffect } from 'react';
import {StyleSheet, View, Text, FlatList,Alert, TouchableOpacity} from 'react-native';
import { getNotes } from '../api';
import NoteList from '../components/NotesList';
import Layout from "../components/layout";
import {completeTask, getListTask, deleteTask, pinnearTask, searchtTask} from "../comm/task.comm";
import {tarea} from "../interfaces/tarea";
import { floor } from 'react-native-reanimated';
import { styles } from '../components/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UsuarioCompleto } from '../interfaces/usuario';

const home = ({navigation}:any)=>{

  const [pineadas, setPineadas] = React.useState([{titulo:'',fechaVencimiento:'', pinear:false, completada:false}]); 
  const [nomales, setNormales] = React.useState([{titulo:'',fechaVencimiento:'', pinear:false, completada:false}]); 
  const [completadas, setCompletadas] = React.useState([{titulo:'',fechaVencimiento:'', pinear:false, completada:false}]);
  const [refresh, setRefresh]= React.useState(false);
 // const [loading, setLoading]= React.useState(true);


  const addNote = ()=>{
    //Se redirecciona a addNote
    navigation.navigate('Addnote', {})
  }

  const loadNotes = async ()=>{
      const notes:tarea[] = await getListTask();
      
      setPineadas(notes.filter((rows)=>{
        return rows.pinear==true
      }));
      setCompletadas(notes.filter((rows)=>{
        return rows.completada==true
      }));
      setNormales(notes.filter((rows)=>{
        return rows.completada==false && rows.pinear==false
      }))

      setRefresh(false);
   //   setLoading(false);
      
  }

  const filterNotes = async (filter:string)=>{
    const notes:tarea[] = await searchtTask(filter);
    setPineadas(notes.filter((rows)=>{
      return rows.pinear==true
    }));
    setCompletadas(notes.filter((rows)=>{
      return rows.completada==true
    }));
    setNormales(notes.filter((rows)=>{
      return rows.completada==false && rows.pinear==false
    }))

    setRefresh(false);
 //   setLoading(false);
    
}

  const search=(titulo:string)=>{
    setRefresh(true);
    filterNotes(titulo);
  }

  const onRefresh= ()=>{
    // setLoading(true)
    setRefresh(true);
     loadNotes(); 
   }

    useEffect(()=>{
        loadNotes();
        const getData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem('login')
            if(jsonValue==null){
              navigation.navigate('Login')
            }
          } catch(e) {
            // error reading value
          }
        }
        getData();        
    }, [])
    
  
    const checked= async(id:number)=>{
      const tarea: tarea= await completeTask(id);
      onRefresh();
    }
    
    const deleteT= async(id:number)=>{
      const tarea: tarea= await deleteTask(id);
      onRefresh();
    }
  
    const pinear=async(id:number)=>{
      const tarea: tarea= await pinnearTask(id);
      onRefresh();
    }
  
    const onLongPress= (id:number)=>{
      Alert.alert(
        "Options",
        "Que desea realizar",
        [
          {
            text: "cancel",
            onPress: () => console.log("Ask me later pressed"),
            style: "cancel"
          },
          {
            text: "Borrar",
            onPress: () => deleteT(id)
          },
          { text: "Pinear", onPress: () => pinear(id) }
        ]
      );}
    return (
      <View style={styles.containerGeneral}>
        <View style={styles.containerTitle}>
                <Text style={styles.title}>Notes</Text>
        </View>
        <View style={styles.conteinerHigh}>
                        <TouchableOpacity onPress={addNote} style={styles.button}>
                                <Text style={styles.buttonText}>Create Note</Text>
                        </TouchableOpacity>
                        </View>
        <Layout component={
            <NoteList  pineadas={pineadas} completadas={completadas} normales={nomales}  refresh={refresh} onRefresh={onRefresh} checked={checked} onPressLong={onLongPress} search={search} navigation={navigation}/>
        }>       
        </Layout>      
      </View>
    )
}

export default home;
