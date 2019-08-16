import React from 'react'
import './Home.css'

function Home(props) {
    return <div className="home">
            
        <h3 className="home-title">Choose a diet</h3>
        <section className="selectDiet">
            <img className="selectDiet-img" src={require('../../images/vegan.png')} alt="vegan" />
            <img className="selectDiet-img" src={require('../../images/vegetarian.png')} alt="vegetarian" />
            <img className="selectDiet-img" src={require('../../images/pescatarian.png')} alt="pescatarian" />
            <img className="selectDiet-img" src={require('../../images/flexitarian.png')} alt="flexitarian" />
        </section>

        <h3 className="home-title">Choose a plan</h3>
        <section className="selectPlan">
            <img className="selectPlan-img" src={require('../../images/balanced-text-light.png')} alt="balanced-option" />
            <img className="selectPlan-img" src={require('../../images/diet-text-light.png')} alt="diet-option" />
            <img className="selectPlan-img" src={require('../../images/custom-text-light.png')} alt="custom-option" />
        </section>
        
        <h3 className="home-title">Select intolerance</h3>
        <section className="selectIntolerance">
            <img className="selectIntolerance-img" src={require('../../images/lactose.png')} alt="lactose" />    
            <img className="selectIntolerance-img" src={require('../../images/gluten.png')} alt="gluten" />
            <img className="selectIntolerance-img" src={require('../../images/no-intolerance.png')} alt="alright" />
        </section>
        <div className="home-create-button-container"><button className="home-create-button" type="submit">CREATE MENU</button></div>
    </div>
}

export default Home