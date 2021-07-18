import React, { useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import { getNotes } from '../api';
import NoteList from '../components/NotesList';
import Layout from "../components/layout";

  const Item = ( {title}:any ) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  
  const renderItem = ({item}:any ) => (
    <Item title={item.titulo} />
  );


const home = ()=>{
    const [data, setData] = React.useState([{titulo:'',descripcion:''}]); 
    const loadNotes = async ()=>{
        const notes = await getNotes();
        setData(notes);
    }

    useEffect(()=>{
        loadNotes()
    }, [])

    return (
        <Layout component={
            <NoteList notes={data} />
        }>
             
        </Layout>
    )
}


export default home;
