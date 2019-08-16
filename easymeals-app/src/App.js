import React, { Component } from 'react'
import Landing from './components/Landing/Landing'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import NavbarLogged from './components/NavbarLogged'
import FooterPage from './components/FooterPage'
import Postits from './components/Postits'
import CustomPlan from './components/CustomPlan'
import Error from './components/Error'
import logic from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'

logic.url = 'http://localhost:5000/api'

class App extends Component {
    state = { error: null }

    handleRegisterClick = () => this.props.history.push('/register')

    handleLoginClick = () => this.props.history.push('/login')

    handleRegister = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)
                .then(() => {
                    this.setState({ error: null }, () => this.props.history.push('/login'))
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleLogin = (username, password) => {
        try {
            logic.login(username, password)
                .then(() =>  this.props.history.push('/postits'))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleLogoutClick = () => {
        logic.logout()

        this.props.history.push('/')
    }

    handleGoBack = () => this.props.history.push('/')

    render() {
        const { error } = this.state

        return <div>
            <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to="/postits" />} />
            <Route path="/register" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onLoginClick={this.handleLoginClick} onGoBack={this.handleGoBack} /> : <Redirect to="/postits" />} />
            <Route path="/login" render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin} onRegisterClick={this.handleRegisterClick} onGoBack={this.handleGoBack} /> : <Redirect to="/postits" />} />
            {error && <Error message={error} />}
            <Route path="/home" reder={() => !logic.loggedIn ? <Home /> : <Redirect to="/postits" />} />
            {logic.loggedIn && <NavbarLogged />}

            <Route path="/customplan" render={() => logic.loggedIn ? <div> 
                <div className="logout-button-section"><a className="logout-button" onClick={this.handleLogoutClick}>Logout</a></div>
                <CustomPlan />
            </div> : <Redirect to="/" />} />
            <Route path="/postits" render={() => logic.loggedIn ? <div>
                <div className="logout-button-section"><a className="logout-button" onClick={this.handleLogoutClick}>Logout</a></div>
                <Postits />
            </div> : <Redirect to="/" />} />
            
            {logic.loggedIn && <FooterPage />}

        </div>
    }
}

export default withRouter(App)
