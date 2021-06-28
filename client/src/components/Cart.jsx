import React, { Component } from 'react';
import { connect } from "react-redux";
import CartItem from "./CartItem";


class Cart extends Component {
    buyFruit = () => {
        // todo if status = 403 redirect to login
    }

    componentDidMount = () => {
        console.log(this.props)
    }

    makeOrder = () => {
        fetch("/make-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                client: this.props.isLoggedIn.username,
                order: this.props.cartItems,
                status: "pending",
                date: new Date()
            })
        });
    }

    render() {
        return (
            <div>
                {this.props.cartItems.length ?
                    <>
                        <h2>Your shopping cart items:</h2>
                        <div className="cart">
                            {this.props.cartItems.map(el => <CartItem value={el} key={el.fruit.fruit_name}/>)}
                        </div>
                        <div className="card">
                            <h2>Total: {
                                this.props.cartItems.reduce((total, el) => {
                                    return total + (el.quantity * el.fruit.price)
                                }, 0)
                            }
                            </h2>
                            <input type="button" value="Make Order" onClick={this.makeOrder} />
                        </div>
                    </>
                    : <h2>Your shopping cart is empty</h2>
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(Cart);
