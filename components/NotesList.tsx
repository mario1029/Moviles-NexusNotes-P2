import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, View, Text, Pressable, SectionList,TextInput, TouchableOpacity } from 'react-native';
import { CheckBox, FAB } from 'react-native-elements'
import {styles as styles2}   from './styles'

const noteList = ({pineadas, completadas, normales, refresh, onRefresh, checked, onPressLong, onPress, search, navigation}:any)=>{

  const [text, setText]= React.useState('');

  const viewNote = (title:string, id:string)=>{
    //aqui faltan mas valores, los de descripcion, fecha e imagen
    navigation.navigate('NoteDetail', {title, id})
  }

  const Item = ( {title, select, id, onRefresh}:any ) => (
    <Pressable
    onPress={()=>{viewNote(title, id)}}
    onLongPress={()=>{onPressLong(id)}}
    >
       <View style={styles.listItem}>
        <Text style={styles.text}>{title}</Text>
        <CheckBox checked={select} 
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o' 
          onPress={()=>{
            checked(id)
          }}
          />
      </View>  
    </Pressable>
    );
  
    const renderItem = ({item}:any ) => (
      <Item title={item.titulo} select={item.completada} id={item.id} />    
    );

    return (
      <View>
        <View>
          <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder={"Buscar tarea/nota"}
          onSubmitEditing={ ()=>search(text)}
          />
        </View>
          <SectionList 
          style={styles.list}
          sections={[
            {title: 'Pineadas', data: pineadas},
            {title: 'Normales', data: normales},
            {title: 'Completadas', data: completadas}
          ]}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title , data} }) => (
              (data.length>0)? <Text style={styles.listHeaderText} >{title}</Text> : null
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshing={refresh}
          onRefresh={onRefresh}
          />
          
         {/* <View style={styles.containerB} >
            <FAB icon={<MaterialIcons name={"add-circle"} style={styles.icon} size={30}/>} size={"small"}/>
         </View> */}
    </View>
    )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  text:{
    color: 'white',
    fontSize: 15
  },
  listHeaderText: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    padding: 10,
    color: 'black',
    fontSize:20
  },
  listItem: {
    flex: 1,
    flexDirection:'row',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#9575cd',
    padding: 10,
    borderRadius: 25,
    borderColor: "#20232a",
    borderWidth: 4,
    alignItems:'center',
    justifyContent:'space-between',
  },
  check:{
    flex: 2,
    justifyContent:'flex-start'
  },
  listHeader: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: "#20232a",
  },
  containerB:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'flex-end',
    marginVertical: 20,
    left:30
  },
  icon: {
    position: 'relative',
  }
});

export default noteList;