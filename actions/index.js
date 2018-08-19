export const GET_DECKS = 'GET_DECKS'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'

export function getDecks (decks) {
    return {
        type: GET_DECKS,
        decks,
    }
}

export function saveDeck (deck) {
    return {
        type: SAVE_DECK_TITLE,
        deck,
    }
}

export function addCardToDeck (title, card) {
    return {
        type: ADD_CARD_TO_DECK,
        title,
        card
    }
}
