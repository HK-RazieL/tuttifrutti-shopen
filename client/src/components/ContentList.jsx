import React, { Component } from 'react';
import Item from "./Item";
import "../static/contentList.css"

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
        ],
    }
    
    render() {
        return (
            <div className="contentList">
                {this.state.items.map(item => <Item value={item} key={item.name}/>)}
            </div>
        );
    }
}

export default ContentList;
