import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./Components/StartScreen/StartGameScreen"
// Custom Components Inculde
import Header from "./Components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
    <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
