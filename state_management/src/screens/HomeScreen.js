import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation }) => {



  return <View>

    <Text style={styles.text}>Hi There</Text>

    <Button
      onPress={() => navigation.navigate("Components")}
      title="Go to Components Demo"
      style={styles.buttonStyle}
    />

    <Button
      onPress={() => navigation.navigate("List")}
      title="Go to List Page"
      style={styles.buttonStyle}
    />

    <Button
      onPress={() => navigation.navigate("Image")}
      title="Go to Image Page"
      style={styles.buttonStyle}
    />

    <Button
      onPress={() => navigation.navigate("Counter")}
      title="Go to Counter Page"
      style={styles.buttonStyle}
    />

    <Button
      onPress={() => navigation.navigate("Color")}
      title="Go to Color Page"
      style={styles.buttonStyle}
    />

    <Button
      onPress={() => navigation.navigate("Square")}
      title="Go to Square Screen Page"
      style={styles.buttonStyle}
    />

    <Button
      onPress={() => navigation.navigate("Input")}
      title="Go to Input Page"
      style={styles.buttonStyle}
    />


  </View>


};

const styles = StyleSheet.create({

  text: {
    fontSize: 30,
  },

  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
  },

});

export default HomeScreen;



