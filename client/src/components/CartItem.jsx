import React, { Component } from 'react';
import { removeFromCart, addToCart, decrement } from "../redux/actions";
import { connect } from "react-redux";

class CartItem extends Component {
    removeFromCart = () => {
        this.props.dispatch(removeFromCart({
            type: "REMOVE_FROM_CART", data: this.props.value.fruit
        }));
        this.forceUpdate();
    }

    addToCart = () => {
        this.props.dispatch(addToCart({
            type: "ADD_TO_CART", data: this.props.value.fruit
        }));
        this.forceUpdate();
    }
    
    decrement = () => {
        this.props.dispatch(decrement({
            type: "INCREMENT", data: this.props.value.fruit
        }));
        this.forceUpdate();
    }

    render() {
        return (
            <div className="cart-item">
                <div>{this.props.value.fruit.fruit_name}</div>
                <div>
                    <input name={this.props.value.fruit.fruit_name} 
                        type="button" 
                        value="-" 
                        onClick={this.decrement}
                        disabled={this.props.value.quantity === 1}
                    />
                    {this.props.value.quantity}
                    <input name={this.props.value.fruit.fruit_name} 
                        type="button" 
                        value="+" 
                        onClick={this.addToCart}
                    />
                </div>
                <div>{this.props.value.quantity * this.props.value.fruit.price}</div>
                <div>Per: {this.props.value.fruit.price}</div>
                <div>{this.props.value.fruit.unit}</div>
                <input name={this.props.value.fruit.fruit_name} 
                    type="button" 
                    value="Remove" 
                    onClick={this.removeFromCart}
                />
            </div>
        );
    }
}

export default connect()(CartItem);
