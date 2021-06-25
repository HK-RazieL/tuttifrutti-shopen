import React, { Component } from 'react';
import "../static/item.css"

class Item extends Component {
    addToCart = () => {

    }

    render() {
        return (
            <div className="item" onClick={this.addToCart} title="Click to add to cart!">
                <span><img alt="img" src={`../static/${this.props.value.fruit_name}.png`}></img></span>
                <span>Name: {this.props.value.fruit_name}</span>
                <span>Color: {this.props.value.color}</span>
                <span>Price: {this.props.value.price}</span>
                <span>Unit: {this.props.value.unit}</span>
                <span>{this.props.value.in_stock ? "In stock" : "Out of stock"}</span>
            </div>
        );
    }
}

export default Item;
