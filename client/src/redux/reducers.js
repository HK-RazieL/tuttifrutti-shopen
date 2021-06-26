import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from "./actions"

const initialState = {
    data: null,
    cartItems: []
}

function Reducers(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(state)
            return {
                ...state,
                cartItems: [...state.cartItems, action.data.data]
            }
            case REMOVE_FROM_CART:
                return {
                    ...state,
                    data: [...action.data]
                }
                default:
                    return state
    }
}

export default Reducers;