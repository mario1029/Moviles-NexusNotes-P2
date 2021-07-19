import React, { useEffect } from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import { getNotes } from '../api';
import NoteList from '../components/NotesList';
import Layout from "../components/layout";
import {getListTask} from "../comm/task.comm";
import {tarea} from "../interfaces/tarea";
import { floor } from 'react-native-reanimated';

  const Item = ( {title}:any ) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  
  const renderItem = ({item}:any ) => (
    <Item title={item.titulo} />
  );


const home = ()=>{
    const [pineadas, setPineadas] = React.useState([{titulo:'',fechaVencimiento:'', posicion:0, pinear:false, completada:false}]); 
    const [nomales, setNormales] = React.useState([{titulo:'',fechaVencimiento:'', posicion:0, pinear:false, completada:false}]); 
    const [completadas, setCompletadas] = React.useState([{titulo:'',fechaVencimiento:'', posicion:0, pinear:false, completada:false}]); 
    const [refresh, setRefresh]= React.useState(false);
   // const [loading, setLoading]= React.useState(true);

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
        console.log(pineadas,nomales,completadas)
    }

    useEffect(()=>{
        loadNotes()
    }, [])

    const onRefresh= ()=>{
     // setLoading(true)
      setRefresh(true);
      loadNotes(); 
    }

    // if(loading){
    //   return <Text>Cargando...</Text>
    // }

    return (
        <Layout component={
            <NoteList  pineadas={pineadas} completadas={completadas} normales={nomales}  refresh={refresh} onRefresh={onRefresh} />
        }>            
        </Layout>
    )
}

export default home;
