import React, { Component } from 'react'
import logic from '../../logic'
import Meal from '../Meal/Meal'
import MealDetail from '../MealDetail/MealDetail'
import ShoppingList from '../ShoppingList/ShoppingList'
import swal from 'sweetalert'
import './MealPlan.css'

class MealPlan extends Component {
    state = { mealPlan: {}, shoppingList: null, mealDetail: null, searchByKeyword: null }

    componentDidMount() {
        
        let _mealPlan = sessionStorage.getItem('mealPlan')
        let mealPlan = JSON.parse(_mealPlan)
        
        { this.setState({ mealPlan }) }
    }  

    handleMoveMeal = (id, name, status, previousState) => {
        let mealPlan = logic.moveMeal(id, name, status, previousState)

        { this.setState({ mealPlan }) }
    }

    handleRemoveMealFromMealPlan = (id, status) => {
        let mealPlan = logic.removeMealFromMealPlan(id, status)
        
        { this.setState({ mealPlan }) }
    }

    handleFavouriteMealClick = id => {
        // const checked = event.target.checked

        // if(checked)
        
        logic.addMealToFavourites(id)
        .then(() => swal('Meal successfully saved!'))
            .catch(err => Error(err))
        // else
        // logic.removeMealFromFavourites(id)
        
        // let _mealPlan = sessionStorage.getItem('mealPlan')
        // let mealPlan = JSON.parse(_mealPlan)

        // { this.setState({ mealPlan }) }
    }

    handleAvoidMeal = id => {
        logic.addMealToAvoidList(id)
    }

    handleShoppingList = () => {

        let shoppingList = logic.generateShoppingList()
        
        { this.setState({ shoppingList }) }
    }

    handleCloseShoppingList = () => {
        { this.setState({ shoppingList: null }) }
    }

    handleSaveMealPlan = () => {
        const mealplan = this.state.mealPlan
        this.props.onSaveMealPlanClick(mealplan)
    }

    dragStart = (event, mealId, name, state) => {
        event.dataTransfer.setData('id', mealId)
        event.dataTransfer.setData('name', name)
        event.dataTransfer.setData('state', state)
    }

    dragOver = event => {
        event.preventDefault()
    }

    onDrop = (event, status) => {

        const idMeal = event.dataTransfer.getData('id')
        const nameMeal = event.dataTransfer.getData('name')
        const previousState = event.dataTransfer.getData('state')

        this.handleMoveMeal(idMeal, nameMeal, status, previousState)
    }

    render() {
        const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
        const mealsDay = ['breakfast', 'midMorning', 'lunch', 'afternoon', 'dinner']

        return <div className="meal-plan">

            { this.state.mealDetail && <div> <MealDetail mealDetail={this.state.mealDetail} onCloseMealDetailClick = { this.handleCloseMealDetail } /></div> }

            {this.state.mealPlan && <div> 

            <h1 className="meal-plan-title">Meal Plan</h1> 

            {this.state.mealPlan.name && <p className="meal-plan-name">{this.state.mealPlan.name.toUpperCase()}</p> }

            <div className="meal-plan-days-container">
                {days.map(day => <h4 className="meal-plan-day">{day}</h4>)}
            </div>

            {mealsDay.map(mealTime => {
                return <div className="meal-plan-meals-container">
                    {this.state.mealPlan.days && this.state.mealPlan.days.map((day, dayIndex) => {
                        return <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, `${day.day}${mealTime}`)}>
                            <h2 className="day-meal">{mealTime.toUpperCase()}</h2>
                            {this.state.mealPlan.days && this.state.mealPlan.days[dayIndex][mealTime].length > 0 && this.state.mealPlan.days[dayIndex][mealTime].map(meal => meal.id && <Meal key={meal.id} id={meal.id} name={meal.name} favouriteMeals = {this.state.favouriteMeals} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.name, meal.status)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onFavouriteMealClick={this.handleFavouriteMealClick} onRemoveMealFromMealPlan={this.handleRemoveMealFromMealPlan} onAvoidMeal={this.handleAvoidMeal} />)}
                        </div>
                    })}
                </div>
            })}
            <div>
                <button className="meal-plan-button" onClick={this.handleShoppingList}>SHOPPING LIST</button>
                <button className="meal-plan-button" onClick={this.handleSaveMealPlan}>SAVE</button>
            </div>
            
            </div>
            }
            {!this.state.mealPlan && <div className="meal-plan-no"><h4 className>No mealplan created yet.</h4></div>}
            {this.state.shoppingList && <div><ShoppingList shoppingList = {this.state.shoppingList} onCloseShoppingListClick={this.handleCloseShoppingList}/></div>}

        </div >
    }
}

export default MealPlan