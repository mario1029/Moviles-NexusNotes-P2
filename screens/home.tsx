import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import { getNotes } from '../api';

const home = ()=>{
    let data;
    const loadNotes = async ()=>{
        const notes = await getNotes();
        console.log(notes)
        data = notes;
    }

    useEffect(()=>{
        loadNotes()
    }, [])

    return (
        <View>
            <Text>Estas en el home</Text>
            <Text>a</Text>
        </View>
    )
}

export default home;