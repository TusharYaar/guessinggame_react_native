import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NumberBox = (props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

export default NumberBox

const styles = StyleSheet.create({
    box: {

        padding: 10,
        borderRadius:5,
        borderWidth: 2,
        borderColor: "orange",
    },
    text: {
        color: "white",
        fontSize: 24,
    }
})
