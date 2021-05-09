import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from "../constants/colors";
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Guessing Game</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        width: "100%",
        height: 75,
        paddingTop: 35,
        alignItems: "center"
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.primaryText
    }
})
