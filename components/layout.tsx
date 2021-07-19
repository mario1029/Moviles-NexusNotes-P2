import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Layout = ({component}:any)=>{
    return (
        <View style={styles.container}>
            {component}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#AD20A5',  
      justifyContent: 'center',
    },
  });
  

export default Layout;