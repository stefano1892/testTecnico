import {TOT_PRICE} from '../constants'

export default function PriceReducer(state = [], action) {
    switch(action.type){
        case TOT_PRICE:
            return{
                ...state,
                totPrice: action.payload
            }
        default:
            return state
    }
}