import React from 'react'
import { StyleSheet, Text} from 'react-native'
import  Colors  from '../constants/colors'

const BodyText = (props) => {
    return (
            <Text style={styles.text}>{props.children}</Text>
    )
}

export default BodyText

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: Colors.primaryText,
        marginVertical: 10
    }
})
