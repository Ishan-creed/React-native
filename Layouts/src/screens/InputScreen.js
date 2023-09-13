import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const InputScreen = () => {

    const [text, setText] = useState("");

    return <View>

        <TextInput

            style={styles.input} placeholder="Enter password"
            autoCapitalize='none'
            autoCorrect={false}
            value={text}
            onChangeText={newValue => setText(newValue)}
        />

      {text.length<5  ? <Text style={{color:"red",marginLeft:"auto",marginRight:"auto",fontWeight:"bold"}}>Password is too short</Text>:<Text style={{color:"green",marginLeft:"auto",marginRight:"auto",fontWeight:"bold"}}>Password is strong</Text>}

    </View>
}

const styles = StyleSheet.create({

    input: {
        margin: 25,
        padding: 4,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    }
});

export default InputScreen;
