import {GET_DECKS, SAVE_DECK_TITLE} from "../actions/index";

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
        default :
            return state
    }
}

export default entries