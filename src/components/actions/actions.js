import {PRODUCT_ID} from '../constants'

export function getId(newId) {
    debugger
    return {
        type: PRODUCT_ID,
        payload: {
            id: newId
      }
    }
  }