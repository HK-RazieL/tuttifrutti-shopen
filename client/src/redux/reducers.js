import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    DECREMENT,
    LOGGED_IN
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
                    return el.fruit.fruit_name === action.data.data.fruit_name
                });
                let temp;
                if (index < 0) {
                    temp = {
                        quantity: 0,
                        fruit: action.data.data
                    };
                    items.push(temp);
                    index = items.length - 1;
                } else {
                    temp = items[index];
                }
                temp.quantity++;
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
                    return el.fruit.fruit_name === action.data.data.fruit_name
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
                    return el.fruit.fruit_name === action.data.data.fruit_name
                });                
                items[index].quantity--;
                return {
                    ...state,
                    cartItems: items
                }
            }
        case LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.data.data
            }
        default:
            return state
    }
}

export default Reducers;