import React, { Component } from 'react';
import { connect } from "react-redux";


class Cart extends Component {
    componentDidMount = () => {
        console.log(this.props.cartData);
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
    cartData: state.data,
})

export default connect(mapStateToProps)(Cart);
