import React from 'react'
import './MealDetail.css'

function MealDetail(props) {

    return <div className="meal-detail-whole-page-container">
        <div className="meal-detail-container">
            <div className="meal-detail-left-container"><img src={props.mealDetail.imageLink || require('../../images/default-meal.jpg')} alt='meal' /></div>

            <div className="meal-detail-right-container">

                <div className="meal-detail-right-container-title"><p>{props.mealDetail.name}</p></div>

                <div className="meal-detail-right-container-ingredients">
                    <div className="meal-detail-right-container-ingredients-title"><p>Main ingredients</p></div>
                    <div className="meal-detail-right-container-ingredients-list">{props.mealDetail.mainIngredients.map(mainIngredient => <p className="meal-detail-right-container-ingredients">{mainIngredient}</p>)}</div>


                    <div className="meal-detail-right-container-ingredients">
                        <div className="meal-detail-right-container-ingredients-title"><p>Optional ingredients</p></div>
                        <div className="meal-detail-right-container-container-ingredients-list">{props.mealDetail.optionalIngredients.map(optionalIngredient => <div><p>{optionalIngredient}</p></div>)}</div>
                    </div>

                </div>

                <div className="meal-detail-right-container-intolerances">
                    {props.mealDetail.intolerances.map(intolerance => <p>{intolerance}</p>)}
                </div>

                <div className="meal-detail-right-container-container-link"><p>GO TO RECIPE</p>{props.mealDetail.recipeLink}</div>

            </div>

            <div className="meal-detail-right-container-button"><button className="meal-detail-button" onClick={props.onCloseMealDetailClick}>CLOSE</button></div>
        </div>
    </div >
}

export default MealDetail