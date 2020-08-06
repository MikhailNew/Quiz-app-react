import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from '../actions/actionsType'

const initialState = {
    quiz: []
}

export default function createReducer(state = initialState, actions) {
    switch (actions.type) {
        case CREATE_QUIZ_QUESTION:
            return {
                ...state, 
                quiz: [...state.quiz, actions.item]
            }
        case RESET_QUIZ_CREATION:
            return {
                ...state, quiz: []
            }    
        default:
            return state
    }
}