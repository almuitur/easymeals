import React, { Component } from 'react'
import logic from '../../logic'
import './CustomMealPlan.css'

class CustomMealPlan extends Component {
    state = {
        customMealPlan: [], name: '', 
        subcategories: [
            { category: 'carb', subcategory: 'flake' },
            { category: 'carb', subcategory: 'toast' },
            { category: 'carb', subcategory: 'pizza' },
            { category: 'carb', subcategory: 'pasta' },
            { category: 'carb', subcategory: 'rice' },
            { category: 'carb', subcategory: 'pancake' },
            { category: 'milk', subcategory: 'none' },
            { category: 'fruit', subcategory: 'fruit' },
            { category: 'fruit', subcategory: 'juice' },
            { category: 'fruit', subcategory: 'milkshake' },
            { category: 'snack', subcategory: 'nut' },
            { category: 'snack', subcategory: 'panini' },
            { category: 'vegetable', subcategory: 'none' },
            { category: 'legume', subcategory: 'none' },
            { category: 'salad', subcategory: 'none' },
            { category: 'soup', subcategory: 'none' },
            { category: 'protein', subcategory: 'meat' },
            { category: 'protein', subcategory: 'fish' },
            { category: 'protein', subcategory: 'egg' },
            { category: 'protein', subcategory: 'seafood' },
            { category: 'pastisserie', subcategory: 'cake' },
            { category: 'pastisserie', subcategory: 'pastry' },
            { category: 'dairy', subcategory: 'yoghurt' },
            { category: 'dairy', subcategory: 'cheese' },
        ]
    }

    componentDidMount() {

        let _customMealPlan = sessionStorage.getItem('customMealPlan')
        let customMealPlan = JSON.parse(_customMealPlan)

        { this.setState({ customMealPlan }) }
    }

    handleNameChange = event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleMoveSubcategory = (id, name, status, previousState) => {
        let customMealPlan = logic.moveMeal(id, name, status, previousState)

        { this.setState({ customMealPlan }) }
    }

    handleRemoveCategoryFromCustomMealPlan = (id, status) => {
        let customMealPlan = logic.removeMealFromMealPlan(id, status)

        { this.setState({ customMealPlan }) }
    }

    handleSaveCustomMealPlan = () => {
        
    }

    handleSubmit = event => {
        event.preventDefault()
        
        // const { customMealPlan, name } = this.state

        // this.props.onSaveMealPlan(customMealPlan, name)
    }

    dragStart = (event, subcategoryId, name, state) => {
        event.dataTransfer.setData('id', subcategoryId)
        event.dataTransfer.setData('name', name)
        event.dataTransfer.setData('state', state)
    }

    dragOver = event => {
        event.preventDefault()
    }

    onDrop = (event, status) => {

        const subcategoryId = event.dataTransfer.getData('id')
        const subcategoryName = event.dataTransfer.getData('name')
        const previousState = event.dataTransfer.getData('state')

        this.handleMoveSubcategory(subcategoryId, subcategoryName, status, previousState)
    }

    render() {
        const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
        const mealsDay = ['breakfast', 'midMorning', 'lunch', 'afternoon', 'dinner']

        return <div className="custom-meal-plan">
            <div className = "custom-meal-plan-container">
            <h1>Custom Meal Plan</h1>

            <form onSubmit={this.handleSubmit} >
                <div className="add-new-meal-name">
                    <h2 className='add-new-meal-title'>Name your custom meal plan:</h2>
                    <input className="add-new-meal-name-input" type="text" onChange={this.handleNameChange}></input>
                </div>

                <div className="ingredients-container">
                    {/* {this.state.subcategories && this.state.subcategories.map(subcategory => <p className={(subcategory.subcategory==='none' ? subcategory.category : category.subcategory)}>{subcategory.subcategory==='none' ? subcategory.category : category.subcategory }</p>)} */}
                </div>

                {/* <div className="meal-plan-days-container">
                    {days.map(day => <h4 className="meal-plan-day">{day}</h4>)}
                </div>
                
                {/* <a onClick={this.handleRemoveOptionalIngredient}><i className="fas fa-times"></i></a> */}
                
                {/* {mealsDay.map(mealTime => {
                    return <div className="meal-plan-meals-container">
                        {this.state.mealPlan.days && this.state.mealPlan.days.map((day, dayIndex) => {
                            return <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, `${day.day}${mealTime}`)}>
                                <h2 className="day-meal">{mealTime.toUpperCase()}</h2>
                                {this.state.mealPlan.days && this.state.mealPlan.days[dayIndex][mealTime].length > 0 && this.state.mealPlan.days[dayIndex][mealTime].map(meal => <Meal key={meal.id} id={meal.id} name={meal.name} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.name, meal.status)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onFavouriteMealClick={this.handleFavouriteMealClick} onRemoveMealFromMealPlan={this.handleRemoveMealFromMealPlan} onAvoidMeal={this.handleAvoidMeal} onMealDetailClick={this.handleMealDetail} />)}
                            </div>
                        })}
                    </div>
                })}  */}
                <div className='home-create-button-container'><button onClick={this.props.onCloseCustomMealPlanClick} className='home-create-button' type='submit'>SAVE TO FAVOURITES</button></div>

            </form>

            {/* {this.state.customMealPlan && <div> </div>} */}

</div>
        </div >
    }
}

export default CustomMealPlan