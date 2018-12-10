import React, { Component } from 'react'
import Error from './components/Error/Error'
import Landing from './components/Landing/Landing'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import NavbarLogged from './components/NavbarLogged'
import FooterPage from './components/FooterPage'
import MealPlan from './components/MealPlan/MealPlan'
import CustomMealPlan from './components/CustomMealPlan/CustomMealPlan'
import MyMeals from './components/MyMeals/MyMeals'
// import Settings from './components/Settings/Settings'
import AddNewMeal from './components/AddNewMeal/AddNewMeal'
import logic from './logic'
import swal from 'sweetalert'
import { Route, withRouter, Redirect } from 'react-router-dom'

logic.url = process.env.REACT_APP_API_URL

class App extends Component {
    state = {}

    handleRegisterClick = event => {
        event.preventDefault()
        this.props.history.push('/register')
    }

    handleLoginClick = event => {
        event.preventDefault()
        this.props.history.push('/login')
    }

    handleRegister = (name, surname, username, password, repeatPassword) => {
        logic.registerUser(name, surname, username, password, repeatPassword)
            .then(() => swal('User successfully registered!'))
            .then(() => this.props.history.push('/login'))
            .catch(err =>swal({title:'Error', text:'User already registered'}))
    }

    handleLogin = (username, password) => {
        logic.login(username, password)
            .then(() => this.props.history.push('/home'))
            .catch(err =>swal({title:'Error', text:'Invalid username or password'}))
            // .catch(err => Error(err))
    }

    handleLogoutClick = () => {
        logic.logout()
        this.props.history.push('/')
    }

    handleGoBack = () => this.props.history.push('/')

    handleAddNewMeal = (name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, seasons) => {
        logic.addNewMeal(name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, seasons)
            .then(() => swal('Meal successfully added!'))
            .then(() => this.props.history.push('/home'))
            .catch(err => Error(err))
    }

    handleAddNewMealClick = event => {
        event.preventDefault()
        this.props.history.push('/addnewmeal')
    }

    handleMyMealsClick = event => {
        event.preventDefault()
        this.props.history.push('/mymeals')
    }

    // handleSettingsClick = event => {
    //     event.preventDefault()
    //     this.props.history.push('/settings')
    // }

    handleMealsPlanClick = event => {
        event.preventDefault()
        this.props.history.push('/mealplan')
    }

    handleHomeClick = event => {
        event.preventDefault()
        this.props.history.push('/home')
    }

    handleUpdateProfile = (name, surname, username, newPassword, password, confirmNewPassword) => {
        logic.updateUser(name, surname, username, newPassword, password, confirmNewPassword)
            .then(() => swal('User successfully updated!'))
            .then(() => this.props.history.push('/home'))
            .catch(err => Error(err))
    }

    handleCreateMealPlan = (diet, plan, intolerances) => {
        logic.createMealPlan(diet, plan, intolerances)
            .then(() => {
                this.props.history.push('/mealplan')
            })
            .catch(err => Error(err))
    }
    handleSaveMealPlan = mealplan => {
        logic.saveMealPlan(mealplan)
            .then(() => swal('Meal Plan successfully saved!'))
            .catch(err => Error(err))
    }
    handleOpenMealPlan = mealplan => {
        logic.openMealPlan(mealplan)
        this.props.history.push('/mealplan')
        
    }

    render() {

        return <div>

            {logic.loggedIn && <NavbarLogged onHomeClick={this.handleHomeClick} onAddNewMealClick={this.handleAddNewMealClick} onMealsPlanClick={this.handleMealsPlanClick} onLogoutClick={this.handleLogoutClick} onMyMealsClick={this.handleMyMealsClick} onSettingsClick={this.handleSettingsClick} />}

            <Route exact path='/' render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to='/home' />} />
            <Route path='/register' render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onLoginClick={this.handleLoginClick} onGoBack={this.handleGoBack} /> : <Redirect to='/home' />} />
            <Route path='/login' render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin} onRegisterClick={this.handleRegisterClick} onGoBack={this.handleGoBack} /> : <Redirect to='/home' />} />
            <Route path='/home' render={() => logic.loggedIn ? <Home onCustomMealPlanClick={this.handleCustomMealPlanClick} onCreateMealPlan={this.handleCreateMealPlan} /> : <Redirect to='/' />} />
            <Route path='/mealplan' render={() => logic.loggedIn ? <MealPlan onSaveMealPlanClick={this.handleSaveMealPlan}/> : <Redirect to='/' />} />
            <Route path='/custommealplan' render={() => logic.loggedIn ? <CustomMealPlan /> : <Redirect to='/' />} />
            <Route path='/addnewmeal' render={() => logic.loggedIn ? <AddNewMeal onAddNewMeal={this.handleAddNewMeal} /> : <Redirect to='/' />} />
            {/* <Route path='/settings' render={() => <Settings onUpdateProfileClick={this.handleUpdateProfile} />} /> */}
            <Route path='/mymeals' render={() => logic.loggedIn ? <MyMeals onOpenMealPlanClick={this.handleOpenMealPlan} /> : <Redirect to='/' />} />
            
            {logic.loggedIn && <FooterPage />}

        </div>
    }
}

export default withRouter(App)
