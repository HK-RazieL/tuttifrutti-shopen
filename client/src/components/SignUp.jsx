import React, { Component } from 'react';

class SignUp extends Component {
    createUser = (event) => {
        event.preventDefault();
        event.stopPropagation();

        fetch("/create-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
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
                <label>Sign Up</label>
                <form method="POST" onSubmit={this.createUser} autoComplete="off">
                    <input type="text" placeholder="Username" name="username" onChange={this.handleChange} />
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        );
    }
}

export default SignUp;
