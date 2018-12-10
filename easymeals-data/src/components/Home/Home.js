import React, { Component } from 'react'
import './Home.css'

class Home extends Component {

    state = { diet: '', plan: '', intolerances: [] }

    handleDietChange = event => {
        const diet = event.target.value

        this.setState({ diet })
    }

    handlePlanChange = event => {

        const plan = event.target.value

        this.setState({ plan })
    }

    handleIntolerancesChange = event => {
        const intoleranceUser = event.target.value

        const checked = event.target.checked

        if (checked) {
            let intolerances = this.state.intolerances
            intolerances.push(intoleranceUser)

            this.setState({ intolerances })
        }
        else {
            let intolerances = this.state.intolerances
            const index = intolerances.findIndex(item => item === intoleranceUser)
            intolerances.splice(index, 1)

            this.setState({ intolerances })
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        
        const { diet, plan, intolerances } = this.state

        this.props.onCreateMealPlan(diet, plan, intolerances)
    }

    render() {

        return <div className='home'>

            <form onSubmit={this.handleSubmit} >

                <h3 className='home-title'>Choose a diet</h3>
                <div className='select-option'>
                    <label for='vegan'>
                        <input type='radio' name='diet' id='vegan' value='vegan' onChange={this.handleDietChange} />
                        <div className='home-image-container'><img className={(this.state.diet === 'vegan') ? 'home-select-option-img-active' : 'home-select-option-img'} src={require('../../images/vegan.png')} alt='vegan' /></div>
                    </label>
                    <label for='vegetarian'>
                        <input type='radio' name='diet' id='vegetarian' value='vegetarian' onChange={this.handleDietChange} />
                        <div className='home-image-container'><img className={(this.state.diet === 'vegetarian') ? 'home-select-option-img-active' : 'home-select-option-img'} src={require('../../images/vegetarian.png')} alt='vegetarian' /></div>
                    </label>
                    <label for='pescatarian'>
                        <input type='radio' name='diet' id='pescatarian' value='pescatarian' onChange={this.handleDietChange} />
                        <div className='home-image-container'><img className={(this.state.diet === 'pescatarian') ? 'home-select-option-img-active' : 'home-select-option-img'} src={require('../../images/pescatarian.png')} alt='pescatarian' /></div>
                    </label>
                    <label for='flexitarian'>
                        <input type='radio' name='diet' id='flexitarian' value='flexitarian' onChange={this.handleDietChange} />
                        <div className='home-image-container'><img className={(this.state.diet === 'flexitarian') ? 'home-select-option-img-active' : 'home-select-option-img'} src={require('../../images/flexitarian.png')} alt='flexitarian' /></div>
                    </label>
                </div>

                <h3 className='home-title'>Choose a plan</h3>
                <div className='select-option-center'>
                    <label for='balanced'>
                        <input type='radio' name='plan' id='balanced' value='balanced' onChange={this.handlePlanChange} />
                        <div className='home-image-container'><img className={(this.state.plan === 'balanced') ? 'home-select-option-img-active' : 'home-select-option-img'} src={require('../../images/balanced.png')} alt='balanced-option' /></div>
                    </label>
                    <label for='diet'>
                        <input type='radio' name='plan' id='diet' value='diet' onChange={this.handlePlanChange} />
                        <div className='home-image-container'><img className={(this.state.plan === 'diet') ? 'home-select-option-img-active' : 'home-select-option-img'} src={require('../../images/diet.png')} alt='diet-option' /></div>
                    </label>
                    {/* <label for='custom'>
                        <input type='radio' name='plan' id='custom' value='custom' onChange={this.handlePlanChange} />
                        <div className='home-image-container'><img className={(this.state.plan === 'custom') ? 'home-select-option-img-active' : 'home-select-option-img'} src={require('../../images/custom.png')} alt='custom-option' /></div>
                    </label> */}
                </div>

                <div className="form-section-color">
                    <h3 className='home-title'>Select intolerance (if any)</h3>
                    <div className='select-option-center'>
                        <label for='lactose'>
                            <input type='checkbox' name='intolerances' id='lactose' value='lactose' onChange={this.handleIntolerancesChange} />
                            <div className='home-image-container'><img className={(this.state.intolerances.includes('lactose')) ? 'home-select-option-img-active' : 'home-select-option-img'} src={require('../../images/lactose.png')} alt='lactose' /></div>
                        </label>
                        <label for='gluten'>
                            <input type='checkbox' name='intolerances' id='gluten' value='gluten' onChange={this.handleIntolerancesChange} />
                            <div className='home-image-container'><img className={(this.state.intolerances.includes('gluten')) ? 'home-select-option-img-active' : 'home-select-option-img'} src={require('../../images/gluten.png')} alt='gluten' /></div>
                        </label>
                    </div>
                </div>
                <div className='home-create-button-container'><button className='home-create-button' type='submit'>CREATE MEAL PLAN</button></div>

            </form>

        </div>
    }
}

export default Home