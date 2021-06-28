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
            <>
                {!this.props.isLoggedIn ? 
                    <div className="auth-form">
                        <label>Sign In</label>
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
                : <div>You have successfully logged in!</div>}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Login);
