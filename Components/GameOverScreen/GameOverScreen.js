import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Card from "../Card";
import BodyText from "../BodyText";
import Colors from "../../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOverText}>
       Game over
      </Text>
      <View>
      <Card ><Text style={styles.guesses}>{props.guesses} guesses</Text></Card>
      </View>
      <Button title="Play Again" onPress={props.onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
  },
  gameOverText: {
      fontSize: 24,
      color: Colors.primaryText,
      marginVertical: 10
  },
  guesses: {
      color: Colors.primaryText,
      fontSize: 24,
  }
});
