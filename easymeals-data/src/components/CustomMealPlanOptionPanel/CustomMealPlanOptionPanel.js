import React, { Component } from 'react'
import './CustomMealPlanOptionPanel.css'

class CustomMealPlanOptionPanel extends Component {
    state = { savedCustomMealPlan: [] }

    render() {
        return <div className="custom-meal-plan-option-panel-container">
                <div className="custom-meal-plan-option-panel-buttons-container">
                    <button className="custom-meal-plan-option-panel-button">NEW</button>
                    <button className="custom-meal-plan-option-panel-button">OPEN</button> 

                    <div className="custom-meal-plan-option-panel-open-container">
                        {/* DROPDOWN */}
                    </div>
                    <div className="custom-meal-plan-option-panel-close-button-container">
                    <button className="custom-meal-plan-option-panel-close-button">CLOSE</button> 
                    </div>
                </div>
            </div>
    }
}

export default CustomMealPlanOptionPanel
