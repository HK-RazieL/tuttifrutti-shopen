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
            <div>
                <form method="POST" onSubmit={this.loginUser} >
                    <input type="text" placeholder="user" name="user" onChange={this.handleChange} />
                    <input type="text" placeholder="pass" name="pass" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Login;
