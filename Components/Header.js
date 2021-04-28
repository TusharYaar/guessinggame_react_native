import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
        backgroundColor: "pink",
        width: "100%",
        height: 69,
        paddingTop: 40,
        alignItems: "center"
    },
    headerText: {
        fontSize: 20
    }
})
