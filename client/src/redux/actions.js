export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function addToCart(data) {
    return { type: ADD_TO_CART, data }
}

export function removeFromCart(data) {
    return { type: REMOVE_FROM_CART, data }
}

export function decrement(data) {
    return { type: DECREMENT, data }
}