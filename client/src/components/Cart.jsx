import React, { Component } from 'react';
import { connect } from "react-redux";
import CartItem from "./CartItem";


class Cart extends Component {
    buyFruit = () => {
        // todo if status = 403 redirect to login
    }

    render() {
        return (
            <div>
                {this.props.cartItems ?
                    (<>
                        <h2>Your shopping cart items:</h2>
                        {this.props.cartItems.map(el => <CartItem value={el} key={Object.keys(el)[0]}/>)}
                    </>)
                    : <h2>Your shopping cart is empty</h2>
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
})

export default connect(mapStateToProps)(Cart);
