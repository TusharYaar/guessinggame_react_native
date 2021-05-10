import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./Components/StartScreen/StartGameScreen";
import GameScreen from "./Components/GameScreen/GameScreen";
import GameOverScreen from "./Components/GameOverScreen/GameOverScreen";
// Custom Components Inculde
import Header from "./Components/Header";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [compGusses, setCompGusses] = useState();
  let content;
  const startGameHandler = (number) => {
    setUserNumber(number);
  };
  const gameOverHandler = (number) => {
    setCompGusses(number);
  };
  const restartGameHandler = () => {
    setUserNumber(null);
    setCompGusses(null);
  };
  // content = <StartGameScreen onStartGame={startGameHandler} />;
  content = <GameOverScreen guesses={13} onRestart={restartGameHandler}/>
  if (userNumber && !compGusses) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (userNumber && compGusses) {
    content = (
      <GameOverScreen guesses={compGusses} onRestart={restartGameHandler} />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
