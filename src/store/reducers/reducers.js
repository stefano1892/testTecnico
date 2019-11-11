import { PRODUCT_ID } from '../constants'

export default function IdReducer(state = '', action) {
    switch(action.type){
        case PRODUCT_ID:
            return{
                ...state,
                id: action.payload.id
            }
        default:
            return state
    }
}