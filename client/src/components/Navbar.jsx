import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { loggedIn } from "../redux/actions";
import { connect } from "react-redux";
import logo from "../static/logo.png"
import Cart from "./Cart";
import ShoppingListItem from "./ShoppingListItem";
import About from "./About";
import Contact from "./Contact";
import ShoppingList from "./ShoppingList";
import SignUp from "./SignUp";
import Login from "./SignIn";

class Navbar extends Component {
    logOut = () => {
        this.props.dispatch(loggedIn({ type: "LOGGED_IN", data: false }))
    }

    render() {
        return (
            <>
            <Router>
                <nav>
                    <img alt="logo" src={logo}></img>
                    <Link to="/">Shopping list</Link>
                    <Link to={this.props.isLoggedIn?.status ? "/cart" : "/login-user"}
                        className="hover-underline-animation">
                            Cart ({this.props.cartItems.reduce((total, el) => {
                                return total + el.quantity;
                            }, 0)})
                    </Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    {!this.props.isLoggedIn?.status ?
                        <>
                            <Link to="/create-user">Sign Up</Link>
                            <Link to="/login-user">Sign In</Link>
                        </>
                    : <Link to="/login-user" onClick={this.logOut}>Log Out</Link>
                    }
                </nav>
                <Switch>
                    <Route exact path="/" component={ShoppingList} onEnter={this.isAuth} />
                    <Route exact path="/cart" component={Cart}  onEnter={this.isAuth} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/create-user" component={SignUp} />
                    <Route exact path="/login-user" component={Login} />
                    <Route exact path="/item/:id" component={ShoppingListItem} />
                </Switch>
            </Router>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Navbar);
