import React, { Component } from 'react';
import ShoppingListItem from "./ShoppingListItem";

class ContentList extends Component {
    state = {
        items: [
            {
                fruit_name: "Apple",
                color: "Red",
                price: 2.50,
                unit: "BG_LEV",
                in_stock: true
            },
            {
                fruit_name: "Orange",
                color: "Orange",
                price: 1.80,
                unit: "BG_LEV",
                in_stock: true
            }, 
            {
                fruit_name: "Plumbus",
                color: "Pink",
                price: 4000,
                unit: "FLURBOS",
                in_stock: false
            },
            {
                fruit_name: "Cherry",
                color: "Red",
                price: 4000,
                unit: "FLURBOS",
                in_stock: true
            },
            {
                fruit_name: "Peach",
                color: "Yellow",
                price: 4000,
                unit: "FLURBOS",
                in_stock: false
            },
        ],
    }

    componentDidMount = () => {
        fetch("/shopping-list")
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState(json);
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
