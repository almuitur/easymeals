import React, { Component } from 'react'
import './Ingredient.css'

class Ingredient extends Component {
    state = { 
        name: this.props.text
     }

    render() {

        return <div className="ingredient-container">
                <p className="ingredient">{this.props.name}<a onClick={() => this.props.onRemoveIngredient(this.props.name)}><i id ='ingredient-remove' className="fas fa-times"></i></a></p>
            </div>
    }
}

export default Ingredient