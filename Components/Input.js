import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}} />
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 20,
        textAlign: 'center'
    }
})
export default Input
