import React, { useEffect } from 'react';
import {StyleSheet, View, Text, FlatList,Alert} from 'react-native';
import { getNotes } from '../api';
import NoteList from '../components/NotesList';
import Layout from "../components/layout";
import {completeTask, getListTask, deleteTask, pinnearTask, searchtTask} from "../comm/task.comm";
import {tarea} from "../interfaces/tarea";
import { floor } from 'react-native-reanimated';

const home = ({navigation}:any)=>{

  const [pineadas, setPineadas] = React.useState([{titulo:'',fechaVencimiento:'', pinear:false, completada:false}]); 
  const [nomales, setNormales] = React.useState([{titulo:'',fechaVencimiento:'', pinear:false, completada:false}]); 
  const [completadas, setCompletadas] = React.useState([{titulo:'',fechaVencimiento:'', pinear:false, completada:false}]); 
  const [refresh, setRefresh]= React.useState(false);
 // const [loading, setLoading]= React.useState(true);

  const loadNotes = async ()=>{
      const notes:tarea[] = await getListTask();
      console.log(notes)
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
      console.log(pineadas,nomales,completadas)
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
    console.log(pineadas,nomales,completadas)
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
        loadNotes()
    }, [])
    
    // if(loading){
    //   return <Text>Cargando...</Text>
    // }

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
        <Layout component={
            <NoteList  pineadas={pineadas} completadas={completadas} normales={nomales}  refresh={refresh} onRefresh={onRefresh} checked={checked} onPressLong={onLongPress} search={search}/>
        }>
             
        </Layout>
        
    )
}

export default home;
