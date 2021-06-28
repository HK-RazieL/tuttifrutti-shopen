import React, { Component } from 'react';
import { loggedIn } from "../redux/actions";
import { connect } from "react-redux";

class Login extends Component {
    loginUser = (event) => {
        event.preventDefault();
        event.stopPropagation();

        fetch("/login-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            return res.json()
        }).then((json) => {
            this.props.dispatch(loggedIn({ 
                type: "LOGGED_IN", 
                data: {
                    username: this.state.username, 
                    status: true
                }
            }));
        });
    }

    handleChange = (e) => {
        let target = e.target;
        this.setState({
            ...this.state,
            [target.name]: target.value
        });
    }

    render() {
        return (
            <div className="login-screen">
                {!this.props.isLoggedIn ? 
                    <div className="auth-form">
                        <h1>Sign In</h1>
                        <form method="POST" onSubmit={this.loginUser}>
                            <input type="text" 
                                placeholder="Username" 
                                name="username" 
                                onChange={this.handleChange} 
                                autoComplete="off" 
                                required />
                            <input type="password" 
                                placeholder="Password" 
                                name="password" 
                                onChange={this.handleChange} 
                                autoComplete="off" 
                                required />
                            <input type="submit" value="Sign In" />
                        </form>
                    </div>
                : <div className="card">
                    <h1>You have successfully logged in!</h1>
                    <h3>Welcome to our store!</h3>
                  </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Login);
