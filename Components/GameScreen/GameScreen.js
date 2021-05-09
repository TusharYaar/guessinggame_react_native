import React, { useState } from "react";
import { StyleSheet, View, Button} from "react-native";
import Card from "../Card";
import NumberBox from "../NumberBox";
import BodyText from "../BodyText";
import Colors from "../../constants/colors";

const generateRandomNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) return generateRandomNum(min, max, exclude);
  return rndNum;
};

const GameScreen = (props) => {
  const [currentGuess, setState] = useState(
    generateRandomNum(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Card>
        <BodyText>Computer's Guess</BodyText>
        <NumberBox title={currentGuess} />
        <View style={styles.buttonContainer}>
            <Button title="Lower" />
            <Button title="Greater" />
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
