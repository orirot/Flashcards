import {addCardToDeckAsyncStorage, getDecksFromAsyncStorage, saveDeckTitleAsyncStorage} from "../utils/api";
import {newDeck} from "../utils/helpers";

export const GET_DECKS = 'GET_DECKS'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks,
    }
}

export function saveDeckTitle(deck) {
    return {
        type: SAVE_DECK_TITLE,
        deck,
    }
}

export function addCardToDeck(title, card) {
    return {
        type: ADD_CARD_TO_DECK,
        title,
        card
    }
}

export const handleGetDecks = () => {
    return (dispatch) => {
        getDecksFromAsyncStorage()
            .then((decks) => {
                console.log('success', decks)
                try {
                    dispatch(getDecks(decks))
                } catch (e) {
                    console.log('failed on dispatch getDecks', e)
                }
            })
            .catch(e => console.log('error', e))
            .then(() => this.setState(() => ({ready: true})))
    }
}

export const handelSaveDeck = (title) => {
    return (dispatch) => {
        return saveDeckTitleAsyncStorage(title)
            .then(() => {
                dispatch(saveDeckTitle(newDeck(title)))
            })
            .catch((e) => {
                console.log('Error in handleSaveQuestion: ', e)
            })
    }
}

export const handelAddCardToDeck = (title, card) => {
    return (dispatch) => {
        return addCardToDeckAsyncStorage(title, card)
            .then(() => {
                dispatch(addCardToDeck(title, card))
            })
            .catch((e) => {
                console.log('Error in handelAddCardToDeck: ', e)
            })
    }
}
