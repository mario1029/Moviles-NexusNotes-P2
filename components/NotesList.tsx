import React from 'react';
import {StyleSheet, View, Text, FlatList, SectionList, RefreshControl} from 'react-native';
import { tarea } from '../interfaces/tarea';

const wait = (timeout:number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
}

const Item = ( {title}:any ) => (
    <View style={styles.listItem}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );

  const renderItem = ({item}:any ) => (
    <Item title={item.titulo} />    
  );



const noteList = ({pineadas, completadas, normales, refresh, onRefresh}:any)=>{
    
    return (
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
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#9575cd',
    padding: 10,
    borderRadius: 5,
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
});

export default noteList;