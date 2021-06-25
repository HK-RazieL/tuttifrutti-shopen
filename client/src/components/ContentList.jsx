import React, { Component } from 'react';
import Item from "./Item";

class ContentList extends Component {
    state = {
        items: [1,2,3]
    }
    
    render() {
        return (
            <>
                {this.state.items.map(item => <Item value={item} />)}
            </>
        );
    }
}

export default ContentList;
