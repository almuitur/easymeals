import React, {Component} from 'react'
import logic from '../../logic'
import './SavedMeal.css'

class SavedMeal extends Component {
    state = { name: '' }

    componentDidMount() {
        if(this.props.id!== undefined){
            logic.retrieveMeal(this.props.id)
            
            .then((meal => this.setState({ name: meal.name })))
            .catch(err => {Error(err)})     
        }
         
    }

    render() {
        return <div className="saved-meal-container">
        <div className="saved-name">{this.state.name}</div>
        <div className="saved-delete-icon">
            <a onClick={() => this.props.deleteSaved(this.props.id)}><i className="fas fa-times"></i></a>
        </div>
    </div>
    }   
}

export default SavedMeal