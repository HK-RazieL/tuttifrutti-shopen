import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../static/logo.png"
import Cart from "./Cart";
import Item from "./Item";
import About from "./About";
import Contact from "./Contact";
import ContentList from "./ContentList";

class Navbar extends Component {
    render() {
        return (
            <>
            <Router>
                <nav>
                    <img alt="logo" src={logo}></img>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={ContentList} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/item/:id" component={Item} />
                </Switch>
            </Router>
            </>
        );
    }
}

export default Navbar;
