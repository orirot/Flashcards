import { AsyncStorage } from 'react-native'
import { formatCalendarResults, CALENDAR_STORAGE_KEY } from './_calendar'

export const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY'

export function getDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}
export function getDeck (id) {
    const decks = getDecks()
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
            AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(newData))
        })}
