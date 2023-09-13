import React from 'react'
import {View,StyleSheet,Text} from 'react-native';

const layoutScreen = () => {

  return <View>

     <View  style = {styles.view}>
        <View style = {styles.view1}></View>
        <View style = {styles.view2}></View>
        </View>

        <View style={styles.view3}></View>
  </View>

}

const styles = StyleSheet.create({

    parentView:{

        display:"flex"
    },
    view:{
        display:"flex",
        flexDirection:"row"
    },
    view1:{
        height:100,
        width:100,
        backgroundColor:"red",
      
    },
    view2:{
        height:100,
        width:100,
        backgroundColor:"blue",
        marginLeft:'auto'
     
    },
    view3:{
        height:100,
        width:100,
        backgroundColor:"green",
        marginLeft:'auto',
        marginRight:"auto"
    }
});

export default layoutScreen
