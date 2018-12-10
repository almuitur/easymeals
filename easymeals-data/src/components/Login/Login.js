import React, {Component} from 'react'
import { Input } from "mdbreact"
import './Login.css'

class Login extends Component {
    state = { username: '', password: '' }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { username, password } = this.state

        this.props.onLogin(username, password)
    }
    render() {
    return <div className="login-general-container">
        <div className="login-left-container"></div>
        <div className="login-right-container">
            <div className="login-right-logo"></div>
            <div className="login-right-form-container">
                <form onSubmit={this.handleSubmit}>
                <Input type="text" label="Username" onChange={this.handleUsernameChange} />
                <Input type="password" label="Password" onChange={this.handlePasswordChange} />
                <button className="btn btn-unique" type="submit">Login</button>
                </form>
            </div>
            <div className="login-right-container-register">
                <p>Not registered yet?</p><a href="#" onClick={this.props.onRegisterClick}>Register</a>
            </div >
            <div><a href="#" onClick={this.props.onGoBack}>Back</a></div>
        </div>
    </div>
    }
}

export default Login