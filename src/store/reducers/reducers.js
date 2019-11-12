import { ADD_ELEMENT, REMOVE_ELEMENT } from '../constants'

const initialState = {
    products: []
}

export default function ArrayReducer(state = initialState, action) {
    switch(action.type){
        case ADD_ELEMENT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case REMOVE_ELEMENT:
            debugger
            const newState = [...state.products.slice(0, action.payload), ...state.products.slice(action.payload + 1)]

            return newState
        default:
            return state
    }
}