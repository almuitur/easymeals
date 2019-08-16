import React, { Component } from 'react'
import { Input } from "mdbreact";
import './Register.css'

class Register extends Component {
    state = { name: '', surname: '', username: '', password: '' }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleRepeatPasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, surname, username, password } = this.state

        this.props.onRegister(name, surname, username, password)
    }

    render() {

    return <div className="register-general-container">
        <div className="register-left-container"></div>
        <div className="register-right-container">
            <div className="register-right-logo"></div>
            <h2 className="register-right-title">Join Easy Meals today!</h2>
            <div className="register-right-form-container">
            <form onSubmit={this.handleSubmit}>
                <Input type="text" label="Name" onChange={this.handleNameChange} />
                <Input type="text" label="Surname" onChange={this.handleSurnameChange} />
                <Input type="text" label="Username" onChange={this.handleSurnameChange} />
                <Input type="password" label="Password" onChange={this.handleUsernameChange} />
                <Input type="password" label="Repeat Password" onChange={this.handleRepeatPasswordChange}/>
                <button className="btn btn-unique" type="submit">Register</button>
            </form>
            </div>
            <div className="register-right-container-login"><p>Already registered?</p><a href="#" onClick={this.props.onLoginClick}>Login</a></div>
            <div className="register-right-back"><a href="#" onClick={this.props.onGoBack}>Back</a></div>
        </div>
    </div>
    }
}

export default Register