import {ADD_ELEMENT, REMOVE_ELEMENT} from '../constants'

export function addCartAction(newId) {
  return {
    type: ADD_ELEMENT,
    payload: newId
  }
}

export function removeCartAction(id) {
  return {
    type: REMOVE_ELEMENT,
    payload: id
  }
}