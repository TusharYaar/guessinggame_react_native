import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card}}>
        {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#B14AED",
    padding: 10,
    width: "80%",
    borderRadius: 5,
    maxWidth: 500,
    alignItems: "center",
    elevation: 8,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.9,

  },
});
