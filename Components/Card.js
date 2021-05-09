import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style}}>
        {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: "85%",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    maxWidth: 500,
    alignItems: "center",
    elevation: 8,
    shadowColor: "white",
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.9,

  },
});
