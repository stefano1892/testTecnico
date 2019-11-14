import {TOT_PRICE} from '../constants'

export default function PriceReducer(state = 0, action) {
    switch(action.type){
        case TOT_PRICE:
            return{
                totPrice: action.payload
            }
        default:
            return state
    }
}