export const GET_DECKS = 'GET_DECKS'

export function getDecks (decks) {
    return {
        type: GET_DECKS,
        decks,
    }
}

export function saveDeckTitle (title) {
    return {
        type: SAVE_DECK_TITLE,
        title,
    }
}

export function addCardToDeck (title, card) {
    return {
        type: ADD_CARD_TO_DECK,
        title,
        card
    }
}
