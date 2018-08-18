import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY'

export const getDecksFromStorage = () => {
    console.log("start get decks", AsyncStorage)
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((decks) => {
        console.log('SUCCESS')
            if (decks) {
                console.log("return decks" + decks)
                return new Promise((resolve,reject) => {resolve(JSON.parse(decks))})
            } else {
                console.log("nothing came back from AsynStorage")
                AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
                    .then(() => {
                        return new Promise((resolve,reject) => {resolve(initialData)})
                    })
            }
        })
        .catch((error) => {
        console.log(error)
        })
}

// export const getDecksFromStorage = async () => {
//     console.log("start get decks from local Storage")
//     const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
//     if (decks){
//         console.log("return decks" + decks)
//         return JSON.parse(decks)
//     }
//     await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
//     console.log("return Initial" + initialData)
//     return initialData
// }

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