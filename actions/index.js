import {saveDeckTitle} from "../utils/api";
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

export function saveDeck(deck) {
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

export const handelSaveDeck = (title) => {
    return (dispatch) => {
        return saveDeckTitle(title)
            .then(() => {
                dispatch(saveDeck(newDeck(title)))
            })
            .catch((e) => {
                console.log('Error in handleSaveQuestion: ', e)
            })
    }
}
