import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    DECREMENT
} from "./actions"

const initialState = {
    data: null,
    cartItems: []
}

function Reducers(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            {
                let items = state.cartItems.slice();
                let index = items.findIndex(el => {
                    return Object.keys(el)[0] === action.data.data.fruit_name
                });
                let temp;
                if (index < 0) {
                    temp = {
                        [action.data.data.fruit_name]: {
                            quantity: 0,
                            fruit: action.data.data
                        }
                    };
                    items.push(temp);
                    index = items.length - 1;
                } else {
                    temp = items[index];
                }
                temp[action.data.data.fruit_name].quantity++;
                items[index] = temp;
                return {
                    ...state,
                    cartItems: items
                }
            }
        case REMOVE_FROM_CART:
            {
                let items = state.cartItems.slice();
                let index = items.findIndex(el => {
                    return Object.keys(el)[0] === action.data.data.fruit_name
                });
                items.splice(index, 1);
                return {
                    ...state,
                    cartItems: items
                }
        }
        case DECREMENT:
            {
                let items = state.cartItems.slice();
                let index = items.findIndex(el => {
                    return Object.keys(el)[0] === action.data.data.fruit_name
                });                
                items[index][action.data.data.fruit_name].quantity--;
                return {
                    ...state,
                    cartItems: items
                }
            }
        default:
            return state
    }
}

export default Reducers;