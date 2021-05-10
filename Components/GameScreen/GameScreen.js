import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import Card from "../Card";
import NumberBox from "../NumberBox";
import BodyText from "../BodyText";
import Colors from "../../constants/colors";

const generateRandomNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude)  return generateRandomNum(min, max, exclude);
  return rndNum;
};

const GameScreen = (props) => {
  const [currentGuess, setcurrentGuess] = useState(
    generateRandomNum(1, 100, props.userChoice)
  );
  const [guesses, setGuesses] = useState(1);
  const currLow = useRef(1);
  const currHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === props.userChoice) props.onGameOver(guesses);
  });

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert(
        "Stop Lying",
        "You know that its wrong, Do you lie to even yourself",
        [{ text: "Sorry", style: "cancel" }]
      );
      return;
    }
    if (direction === "lower") {
      currHigh.current = currentGuess;
    } else if (direction === "greater") {
      currLow.current = currentGuess;
    }
    const nextNum = generateRandomNum(
      currLow.current,
      currHigh.current,
      currentGuess
    );
    console.log(nextNum)
    setcurrentGuess(nextNum);
    setGuesses((guesses) => guesses + 1);
  };
  return (
    <View style={styles.screen}>
      <Card>
        <BodyText>Computer's Guess</BodyText>
        <NumberBox title={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button
            title="Lower"
            onPress={nextGuessHandler.bind(this, "lower")}
          />
          <Button
            title="Greater"
            onPress={nextGuessHandler.bind(this, "greater")}
          />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    width: "90%",
  },
});
