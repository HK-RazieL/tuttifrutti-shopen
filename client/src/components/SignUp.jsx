import React, { Component } from 'react';

class SignUp extends Component {
    createUser = (event) => {
        event.preventDefault();
        event.stopPropagation();

        fetch("/create-user", {
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
            <div className="authForm">
                <label>Sign Up</label>
                <form method="POST" onSubmit={this.createUser}>
                    <input type="text" placeholder="Username" name="user" onChange={this.handleChange} />
                    <input type="text" placeholder="Password" name="pass" onChange={this.handleChange}/>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        );
    }
}

export default SignUp;
