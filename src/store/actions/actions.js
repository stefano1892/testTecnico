import {ADD_ELEMENT, REMOVE_ELEMENT, TOT_PRICE, CLEAR_CART} from '../constants'

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

export function totPrice(price) {
  return {
    type: TOT_PRICE,
    payload: price
  }
}

export function clearCart(id) {
  return {
    type: CLEAR_CART,
    payload: id
  }
}