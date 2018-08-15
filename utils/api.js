import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY'

export function getDecksFromStorage () {
    const decks =  AsyncStorage.getItem(DECKS_STORAGE_KEY)
    if (!Object.keys(decks).length === 0){
        return decks
    }
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
    return initialData
}
export function getDeck (id) {
    const decks = getDecksFromStorage()
    return decks[id]
}

export function saveDeckTitle (title) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        title : {
            'title' : title,
            'questions' : []
        }
    }))
}

export function addCardToDeck (title, card) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            const newData = {
                ...data,
                [title] : {...data[title],
                'questions' : [...data[title].questions, card]}
            }
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newData))
        })}

export const initialData = {
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
    }
}

