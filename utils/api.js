import { AsyncStorage } from 'react-native';
import {mergedStateAddCardToDeck, newDeck, dummyData} from "./helpers";

export const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY'

export const getDecksFromAsyncStorage = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((decks) => {
            if (decks === null) {
                console.log("nothing came back from AsynStorage")
                return setDummyData()
            } else {
                console.log("return decks" + decks)
                return JSON.parse(decks)
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
//         console.log("return deckss" + decks)
//         return JSON.parse(decks)
//     }
//     await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
//     console.log("return Initiall" + initialData)
//     return initialData
// }

// export function getDeck (id) {
//     const decks = getDecksFromStorage()
//     return decks[id]
// }

export function saveDeckTitleAsyncStorage (title) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(newDeck(title)))
}

export function addCardToDeckAsyncStorage (title, card) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            const newData = mergedStateAddCardToDeck(data, title, card)
           return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newData))
        })
}

const setDummyData = () => {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
        .then(() => {
            return dummyData
        })
}


// const setDummyData = () => {
//     AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
//         .then(() => {
//             return new Promise((resolve) => {resolve(dummyData)})
//         })
// }