import React, { Component } from 'react';

class Login extends Component {
    loginUser = (event) => {
        event.preventDefault();
        event.stopPropagation();

        fetch("/login-user", {
            method: "POST",
            body: this.state
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
            <div className="auth-form">
                <label>Sign In</label>
                <form method="POST" onSubmit={this.loginUser}>
                    <input type="text" placeholder="Username" name="user" onChange={this.handleChange} />
                    <input type="text" placeholder="Password" name="pass" onChange={this.handleChange}/>
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        );
    }
}

export default Login;
