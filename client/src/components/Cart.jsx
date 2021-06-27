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
                        <div className="cart">
                            {this.props.cartItems.map(el => <CartItem value={el} key={Object.keys(el)[0]}/>)}
                        </div>
                    </>)
                    : <h2>Your shopping cart is empty</h2>
                }
                <h2 className="card">Total: {
                    this.props.cartItems.reduce((total, el) => {
                        return total + (el[Object.keys(el)[0]].quantity * el[Object.keys(el)[0]].fruit.price)
                    }, 0)
                }
                </h2>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    cartItems: state.cartItems
})

export default connect(mapStateToProps)(Cart);
