import React from 'react'
// import { Button } from "mdbreact";
import './Landing.css'

function Landing(props) {

    return <div className="landing-content">
        <div className="landing-logo-container"> 
            <div className="landing-logo"></div> 
        </div> 
        <div className="landing-title-container">
            <h2 className="landing-title">Weekly Meals Plan Generator</h2>
        </div>
        <div className="landing-buttons">
            <button onClick={props.onRegisterClick} className="btn btn-unique">Register</button>
            <button onClick={props.onLoginClick} className="btn btn-unique">Login</button>
        </div>
    </div>
}

export default Landing