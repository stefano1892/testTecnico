import { ADD_ELEMENT, REMOVE_ELEMENT } from '../constants'

const initialState = {
    products: [],
    totPrice: 0 
}

export default function ArrayReducer(state = initialState, action) {
    switch(action.type){
        case ADD_ELEMENT:
            return {
                ...state,
                products: [...state.products, action.payload],
                totPrice: state.totPrice + parseInt(action.payload.price)
            }
        case REMOVE_ELEMENT:
            return{
                ...state,
                products: state.products.filter(( _, index ) => { return index !== action.payload }),
                totPrice: state.totPrice - parseInt(state.products[action.payload].price)
            }
        default:
            return state
    }
}