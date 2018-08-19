import {ADD_CARD_TO_DECK, GET_DECKS, SAVE_DECK_TITLE} from "../actions/index";

function entries (state = {}, action) {
    switch (action.type) {
        case GET_DECKS :
            return {
                ...state,
                ...action.decks,
            }
        case SAVE_DECK_TITLE :
            return {
                ...state,
                ...action.deck
            }
        case ADD_CARD_TO_DECK:
            const {title, card} = action
        return {
            ...state,
            [title] : {...state[title],
                'questions' : [...state[title].questions, card]}
        }
        default :
            return state
    }
}

export default entries