import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from "./actions"

const initialState = {
    data: null,
}

function Reducers(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action.data.data)
            let cartData = [];
            let data = action.data.data;
            if (cartData.find(el => el.fruit_name === data.fruit_name)) {
                console.log(cartData);
            }
            return {
                ...state,
                data: cartData
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