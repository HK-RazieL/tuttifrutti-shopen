import React, { Component } from 'react';
import { connect } from "react-redux";


class Cart extends Component {
    componentDidMount = () => {
        if (this.props.cartItems) {
            console.log(this.props.cartItems)
        }
    }

    buyFruit = () => {
        // todo if status = 403 redirect to login
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
})

export default connect(mapStateToProps)(Cart);
