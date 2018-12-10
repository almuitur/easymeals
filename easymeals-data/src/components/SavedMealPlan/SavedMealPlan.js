import React from 'react'
import logic from '../../logic'
import './SavedMealPlan.css'

function SavedMealPlan(props) {

    return <div className="saved-container">
        <div className="saved-name">{props.name}</div>
        <div className="saved-date">{logic.getDate(props.date)}</div>
        <div className="saved-delete-icon">
            <a onClick={() => props.openMealPlan(props.mealplan)}><i className="far fa-folder-open"></i></a>
            <a onClick={() => props.deleteSaved(props.id)}><i className="fas fa-times"></i></a>
        </div>
    </div>
}   

export default SavedMealPlan