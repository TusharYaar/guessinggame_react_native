import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Input from "../Input";
import Card from "../Card";
const StartGameScreen = () => {
  const [number, setNumber] = useState("");
  const handleChangeNumber = (value) => {
      if(!value.match(/[^0-9]/gm))
            setNumber(value);
  };
  return (
    <View style={styles.screen}>
      <Text>Hello, Start A Game</Text>
      <Card>
        <Text>Input A Number</Text>
        <Input
          style={styles.textInput}
          value={number}
          onChangeText={handleChangeNumber}
          maxLength={2}
          blurOnSubmit
          autoCorrect={false}
          keyboardType="number-pad"
        />
        <View style={styles.buttonContainer}>
          <Button title="Reset" OnPress={() => {}} />
          <Button title="Start" OnPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "orange",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "80%",
  },
});

export default StartGameScreen;
