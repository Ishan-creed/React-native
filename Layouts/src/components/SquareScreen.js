import React from 'react'
import { Text, View, StyleSheet,Button} from 'react-native';


const SquareScreens = (props) => {

    return <View>

       <Text>{props.colorName}</Text>
       <Button title = {`Increase ${props.colorName}`} onPress = {()=>props.onIncrease()}/>
       <Button title = {`Decrease ${props.colorName}`} onPress = {()=>props.onDecrease()}/>


   </View>
}

const styles = StyleSheet.create({


})


export default SquareScreens;
