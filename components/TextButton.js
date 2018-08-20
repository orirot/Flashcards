import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { black } from '../utils/colors'

export default function TextButton ({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.button, style]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        color: black,
        flexDirection: 'row',
        padding: 5,
        borderRadius: 8,
        width: 250,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        fontSize:30
    },
})