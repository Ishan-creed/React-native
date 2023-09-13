import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';
import SquareScreens from '../components/SquareScreen';

const SquareScreen = () => {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const change = 10;

  console.log(red);


  return <View>

    <SquareScreens onIncrease={() =>{ if(red+change>255){return} setRed(red + change)}} onDecrease={() => { if(red-change<0){return} setRed(red - change)}} colorName="Red" />
    <SquareScreens colorName="Green" onIncrease={() =>{ if(green+change>255){return} setGreen(green + change)}} onDecrease={() =>{ if(green-change<0){return}  setGreen(green - change)}} />
    <SquareScreens colorName="Blue" onIncrease={() => { if(blue+change>255){return} setBlue(blue + change)}} onDecrease={() => { if(blue-change<0)  setBlue(blue - change)}} />

   <View  style = {{height:150,width:150, backgroundColor:`rgb(${red},${blue},${green})`}} />

   <Button title='Reset' onPress={()=>{setRed(0), setBlue(0), setGreen(0)}}/>

  </View>

}

const styles = StyleSheet.create({});

export default SquareScreen;
