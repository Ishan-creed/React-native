import React, { useReducer, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {

    switch (action.type) {

        case 'increament':

            return { ...state, counter: state.counter + action.payload };

        case 'decreament':

            return { ...state, counter: state.counter - action.payload };

        default:

            return state;
    }

}

function CounterScreen() {


    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return <View>
        <Button title='Increase' onPress={() => {
            dispatch({type:'increament',payload:1})
        
        }} />
        <Button title='Decrease' onPress={() => {
            dispatch({type:'decreament',payload:1})
            
        }} />
        <Text>Counter Count: {state.counter}</Text>
    </View>
}


const styles = StyleSheet.create({});

export default CounterScreen;
