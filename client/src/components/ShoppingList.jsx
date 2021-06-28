import React, { Component } from 'react';
import ShoppingListItem from "./ShoppingListItem";

class ContentList extends Component {
    state = {
        items: []
    }

    componentDidMount = () => {
        fetch("/shopping-list")
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState({items:json});
            });
    }
    
    render() {
        return (
            <div className="contentList">
                {this.state.items.map(item => <ShoppingListItem value={item} key={item.fruit_name}/>)}
            </div>
        );
    }
}

export default ContentList;
