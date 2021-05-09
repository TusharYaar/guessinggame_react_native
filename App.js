import { StatusBar } from "expo-status-bar";
import React, { useState }from "react";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./Components/StartScreen/StartGameScreen";
import GameScreen from "./Components/GameScreen/GameScreen";
// Custom Components Inculde
import Header from "./Components/Header";

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [compGusses,setCompGusses] = useState();
  let content;
  const startGameHandler = (number) => {
    setUserNumber(number);
  } 
  content = <StartGameScreen onStartGame={startGameHandler}/>
  if(userNumber) {
  content = <GameScreen  userChoice={userNumber}/>
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
