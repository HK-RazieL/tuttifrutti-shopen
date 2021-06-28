import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        status: ""
    }

    createUser = (event) => {
        event.preventDefault();
        event.stopPropagation();

        fetch("/create-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            if (res.status === 409) {
                this.setState({
                    status: "User Already Exists!"
                });
            } else {
                this.setState({
                    status: "Success!"
                });
            }
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
                <form method="POST" onSubmit={this.createUser}>
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
                    <input type="submit" value="Sign Up" />
                    {
                        this.state.status ? <div style={{color: "red"}}>{this.state.status}</div> : ""
                    }
                </form>
            </div>
        );
    }
}

export default SignUp;
