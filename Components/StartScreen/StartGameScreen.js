import React, { useState } from "react";
import { View, Text, StyleSheet, Button,TouchableWithoutFeedback,Keyboard, Alert } from "react-native";
import Input from "../Input";
import Card from "../Card";
import BodyText from "../BodyText";
import Colors from "../../constants/colors";
import NumberBox from "../NumberBox";


const StartGameScreen = (props) => {
  const [number, setNumber] = useState("");
  const [confirmed,setConfirmed] = useState(false);
  const handleChangeNumber = (value) => {
      if(!value.match(/[^0-9]/gm))
            {setNumber(value);
              setConfirmed(false);}
  };
  const resetNumber = () => {
    setNumber("");
    setConfirmed(false);
  }
  const confirmNumber = () => {
    var thisNum = parseInt(number);
    if(isNaN(thisNum) || thisNum <= 0 || thisNum > 99){
     Alert.alert("Invalid number","Number must be between 1 and 99",[
      {
        text: "Ok",
        onPress: resetNumber,
        style:"destructive",
      },
    ],);
      return;
    }
    setConfirmed(true);
  }
  const startGame = () => {
    props.onStartGame(number);
  }
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <View style={styles.screen}>
      <BodyText>Hello, Start A Game</BodyText>
      <Card >
        <BodyText>Input A Number</BodyText>
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
          <Button title="Reset" onPress={resetNumber} color={Colors.tertiary} />
          <Button title="Confirm" onPress={confirmNumber} color={Colors.secondary} />
        </View>
      </Card>
      {confirmed ? <Card style={styles.card}><BodyText>Your Number </BodyText><NumberBox title={number}/><View style={styles.buttonContainer2}>
          <Button title="Start Game" onPress={()=> {props.onStartGame(number)}} color={Colors.secondary} />
        </View></Card> : null}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.backgroundColor
  },
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "orange",
    color: Colors.primaryText
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    width: "90%",
  },
  buttonContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    width: "90%",
  },
  card: {
  marginVertical: 20
  }
});

export default StartGameScreen;
