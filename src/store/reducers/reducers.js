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
            return{
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}