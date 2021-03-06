import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const Custombutton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={[styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}]}>

            <Text style={[styles.text,
            styles[`text_${type}`],
            fgColor ? { color: fgColor } : {}]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 8,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_TERTIARY: {
        color: 'grey'
    }
})

export default Custombutton

