import React, { Component } from 'react'
import logic from '../../logic'
import SavedMealPlan from '../SavedMealPlan/SavedMealPlan'
import SavedMeal from '../SavedMeal/SavedMeal'
import './MyMeals.css'

class MyMeals extends Component {

    state = { savedMealPlans: [], favouriteMeals: [], mealsToAvoid: [] }

    componentDidMount() {
        logic.retrieveUser()
            .then((res) => {
                
                if(res.savedMealPlans && res.savedMealPlans.length) this.setState({ savedMealPlans: res.savedMealPlans })
                if(res.favouriteMeals && res.favouriteMeals.length) this.setState ({ favouriteMeals: res.favouriteMeals })
                // if(res.mealsToAvoid && res.mealsToAvoid.length) this.setState ({ mealsToAvoid: res.mealsToAvoid })
            })
            .catch(err => Error(err))
    }
    handleOpenMealPlan = mealplan => {
        
        this.props.onOpenMealPlanClick(mealplan)
    }

    handleDeleteSavedMealPlan = id => {
        logic.deleteSavedMealPlan(id)
        .then(() => logic.retrieveUser())
        .then((res) => this.setState ({ savedMealPlans: res.savedMealPlans }))
        .catch(err => Error(err))       
    }

    handleRemoveFavouriteMeal = mealId => {
        logic.removeMealFromFavourites(mealId)
        .then(() => logic.retrieveUser())
        .then((res) => this.setState ({ favouriteMeals: res.favouriteMeals }))
        .catch(err => Error(err))    
    }

    handleRemoveMealToAvoid = id => {
        logic.removeMealFromAvoidList(id)
            .then(res => this.setState({ mealsToAvoid: res }))
            .catch(err => Error(err))    
    }

    render() {
        return <div className="my-meals-container">

            <h2 className="my-meals-main-title">My Meals </h2>

            <h3 className="my-meals-title">My Meal Plans</h3>
            <div>
                {(!this.state.savedMealPlans || !this.state.savedMealPlans.length) ? <div><h1 className="my-meals-nothing-found">No meal plans added yet.</h1></div> 
                : <div className="my-meals-item-saved">{this.state.savedMealPlans.map(mealPlan => <SavedMealPlan key={mealPlan.date} mealplan={mealPlan} id={mealPlan.date} name={mealPlan.name} date={mealPlan.date} deleteSaved={this.handleDeleteSavedMealPlan} openMealPlan = { this.handleOpenMealPlan}/>)}</div> }
            </div>

            <h3 className="my-meals-title">My Favourite Meals</h3>
            <div>
                {(!this.state.favouriteMeals || !this.state.favouriteMeals.length) ? <div><h1 className="my-meals-nothing-found">No favourite meals added yet to your favourite meals list.</h1></div> 
                : <div className="my-meals-item-saved">{this.state.favouriteMeals.map(mealId => <SavedMeal key={mealId} id={mealId} deleteSaved={this.handleRemoveFavouriteMeal} />)}</div>} 
            </div>

            {/* <h3 className="my-meals-title">Meals to Avoid</h3>
            <div>
                {(!this.state.mealsToAvoid || !this.state.mealsToAvoid.length) ? <div><h1 className="my-meals-nothing-found">No meals added yet to your meals to avoid list.</h1></div>
                : <div className="my-meals-item-saved">{this.state.mealsToAvoid.map(meal => <SavedMeal key={meal.id} id={meal.id} deleteSaved={this.handleRemoveMealToAvoid} />)}</div>} 
            </div > */}

        </div>
    }
}

export default MyMeals