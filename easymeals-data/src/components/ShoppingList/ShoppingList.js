import React from 'react'
import './ShoppingList.css'

function ShoppingList(props) {

    return <div className="shopping-list-whole-container">

        <div className="shopping-list-container">

            <div className="shopping-list-container-content">

                <h1>Shopping List</h1>

                <div className="shopping-list-ingredients"><h5>Main ingredients:</h5></div>
                <div className="shopping-list-ingredients">{props.shoppingList.mainIngredients && props.shoppingList.mainIngredients.map(ingredient => <p>{ingredient}</p>)}</div>
                <div className="shopping-list-ingredients"><h5>Optional ingredients:</h5></div>
                <div className="shopping-list-ingredients">{props.shoppingList.optionalIngredients && props.shoppingList.optionalIngredients.map(ingredient => <p>{ingredient}</p>)}</div>
                <div className="shopping-list-container-button"><button className="shopping-list-button" onClick={props.onCloseShoppingListClick}>CLOSE</button></div>
            </div>
        </div>
    </div>
}

export default ShoppingList
