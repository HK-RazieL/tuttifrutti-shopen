import React, { Component } from 'react';
import { addToCart } from "../redux/actions";
import { connect } from "react-redux";

class ShoppingListItem extends Component {
    addToCart = () => {
        this.props.dispatch(addToCart({type: "ADD_TO_CART", data: this.props.value}));
    }

    render() {
        return (
            <div className="shopping-list-item" onClick={this.addToCart} title="Click to add to cart!">
                <span><img alt="img" ></img></span>
                <span>Name: {this.props.value.fruit_name}</span>
                <span>Color: {this.props.value.color}</span>
                <span>Price: {this.props.value.price}</span>
                <span>Unit: {this.props.value.unit}</span>
                <span>{this.props.value.in_stock ? "In stock" : "Out of stock"}</span>
            </div>
        );
    }
}

export default connect()(ShoppingListItem);
