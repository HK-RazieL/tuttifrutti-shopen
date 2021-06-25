import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <>
                {this.props.value}
            </>
        );
    }
}

export default Item;
