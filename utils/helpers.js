import React from 'react'
import { StyleSheet } from 'react-native'


export const mergedStateAddCardToDeck = (state, title, card)=>{
    return {
        ...state,
        [title] : {...state[title],
            'questions' : [...state[title].questions, card]}
    }

}

export const newDeck = (title) => {
    return {
        [title]: {
            'title': title,
            'questions': []
        }
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        padding: 5,
        borderRadius: 8,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
})

