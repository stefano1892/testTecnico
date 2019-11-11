import { PRODUCT_ID } from '../constants'

export default function IdReducer(state = '', {type, payload}){
    debugger
    switch(type){
        case PRODUCT_ID:
            return payload.id;
        default:
            return state
    }
}