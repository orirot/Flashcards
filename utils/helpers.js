import React from 'react'

export const mergedStateAddCardToDeck = (state, title, card) => {
    return {
        ...state,
        [title]: {
            ...state[title],
            'questions': [...state[title].questions, card]
        }
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

export const newCard = (question, answer) => {
    return {
        question,
        answer
    }
}

export const dummyData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
}