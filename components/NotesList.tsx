import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const Item = ( {title}:any ) => (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
  
  const renderItem = ({item}:any ) => (
    <Item title={item.titulo} />
  );



const noteList = ({notes}:any)=>{
    return (
        <FlatList 
         data={notes}
         renderItem={renderItem}
         keyExtractor={(item, index) => index.toString()}
         />
    )
}

const styles = StyleSheet.create({
    text:{
        color: 'white',
        fontSize: 15
      },
  });

export default noteList;