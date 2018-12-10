import React, { Component } from 'react'
import { Input } from "mdbreact"
import './Settings.css'

class Settings extends Component {
    state = { name: '', surname: '', username: '', newPassword: '', password: '', confirmNewPassword: '' }

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

    handleNewPasswordChange = event => {
        const newPassword = event.target.value

        this.setState({ newPassword })
    }

    handleOldPasswordChange = event => {
        const oldPassword = event.target.value

        this.setState({ oldPassword })
    }

    handleConfirmNewPasswordChange = event => {
        const confirmNewPassword = event.target.value
        
        this.setState({ confirmNewPassword })
    }

    handleSubmit = event => {

        event.preventDefault()

        const { name, surname, username, oldPassword, newPassword, confirmNewPassword } = this.state

        this.props.onUpdateProfileClick(name, surname, username, oldPassword, newPassword, confirmNewPassword)
        
    }
    
    render() {
        return <div className="profile-container">
            <div className="profile-header"></div>
            <div className="profile-photo"></div>
            <div className="profile-form-container">
                <div className="profile-form-subcontainer-left">
                    <p className="profile-form-subcontainer-left-title">Account settings</p>
                </div>
                <div className="profile-form-subcontainer-center">
                    <ul>
                        <li className="profile-form-subcontainer-center-font">Name</li>
                        <li className="profile-form-subcontainer-center-font">Surname</li>
                        <li className="profile-form-subcontainer-center-font">Username</li>
                        <li className="profile-form-subcontainer-center-font">Old Password</li>
                        <li className="profile-form-subcontainer-center-font">New Password</li>
                        <li className="profile-form-subcontainer-center-font">Confirm New Password</li>

                    </ul>
                </div>
                <div className="profile-form-subcontainer-right">
                    <form className="profile-form" onSubmit={this.handleSubmit}>
                        <Input type="text" onChange={this.handleNameChange} />
                        <Input type="text" onChange={this.handleSurnameChange} />
                        <Input type="text" onChange={this.handleUsernameChange} />
                        <Input type="password" onChange={this.handleOldPasswordChange} />
                        <Input type="password" onChange={this.handleNewPasswordChange} />
                        <Input type="password" onChange={this.handleConfirmNewPasswordChange} />
                        <button className="btn btn-unique" type="submit">Update</button>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default Settings