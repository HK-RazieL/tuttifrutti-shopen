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
            <div>
                <form method="POST" onSubmit={this.createUser} >
                    <input type="text" placeholder="user" name="user" onChange={this.handleChange} />
                    <input type="text" placeholder="pass" name="pass" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default SignUp;
