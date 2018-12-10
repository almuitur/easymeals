import Error from './components/Error/Error'
import data from './data'

const logic = {
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,
    _mealPlan: sessionStorage.getItem('mealplan') || null,
    _diet: sessionStorage.getItem('diet') || null,
    _intolerances: sessionStorage.getItem('intolerances') || null,

    url: 'NO-URL',

     /*** Sends POST request with user info to register
     * Registers a user
     * @param {string} name 
     * @param {string} surname 
     * @param {string} username 
     * @param {string} password 
     * @throws {AlreadyExistsError in case of username already registered}
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @returns {Promise}
     */
    registerUser(name, surname, username, password, repeatPassword) {
        
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
        if (typeof repeatPassword !== 'string') throw TypeError(`${repeatPassword} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')
        if (!repeatPassword.trim()) throw Error('password is empty or blank')

        if (password != repeatPassword) throw Error('passwords do not match')

        return fetch(`${this.url}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

      /**Sends POST request with user info to log in
     * Logs a user in
     * @param {string} username 
     * @param {string} password 
     * @throws {AuthError in case of wrong combination of username and password}
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @returns {Promise}
     */
    login(username, password) {

        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch(`${this.url}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(res => {
                
                if (res.error) throw Error(res.error)
                
                const { id, token } = res.data

                this._userId = id
                this._token = token

                sessionStorage.setItem('userId', id)
                sessionStorage.setItem('token', token)
            })
    },

    /** Gets information about user being logged in
     * Returns either user id or false
     * @returns user id
     */
    get loggedIn() {
        return !!this._userId
    },

    /**Sets variables to null and save them to session storage
     * Logs out
     */
    logout() {
        this._mealPlan = null
        this._userId = null
        this._token = null
        this._diet = null
        this._intolerances = null

        sessionStorage.removeItem('mealPlan')
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('diet')
        sessionStorage.removeItem('intolerances')
    },

    // updateUser(name, surname, username, oldPassword, newPassword, confirmNewPassword) {

    //     if (typeof name !== 'string') throw TypeError(`${name} is not a string (name)`)
    //     if (typeof surname !== 'string') throw TypeError(`${surname} is not a string (surname)`)
    //     if (typeof username !== 'string') throw TypeError(`${username} is not a string (username)`)
    //     if (typeof oldPassword !== 'string') throw TypeError(`${oldPassword} is not a string (current password)`)
    //     if (typeof newPassword !== 'string') throw TypeError(`${newPassword} is not a string (new password)`)
    //     if (typeof confirmNewPassword !== 'string') throw TypeError(`${confirmNewPassword} is not a string (new password confirmation)`)

    //     if (!name.trim()) throw Error('name is empty or blank')
    //     if (!surname.trim()) throw Error('surname is empty or blank')
    //     if (!username.trim()) throw Error('username is empty or blank')
    //     if (!oldPassword.trim()) throw Error('oldPassword is empty or blank')
    //     if (!newPassword.trim()) throw Error('newPassword is empty or blank')
    //     if (!confirmNewPassword.trim()) throw Error('confirmNewPassword is empty or blank')

    //     return fetch(`${this.url}/users/${this._userId}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8',
    //             'Authorization': `Bearer ${this._token}`
    //         },
    //         body: JSON.stringify({ name, surname, username, oldPassword, newPassword, confirmNewPassword })
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)
    //         })
    // },

    /**Sends GET request with user id to retrieve user information
     * @returns {Promise}
     */
    retrieveUser() {
        return fetch(`${this.url}/users/${this._userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                
                return res.data
            })
    },

    /****Sends POST request with search parameters to find a meal
     * Finds a random meal that complies with the given search parameters
     * @param {string} diet 
     * @param {array} _plan 
     * @param {array} intolerances
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @throws {Error in case of empty mandatory variables}
     * @returns {Promise} 
     */
    createMealPlan(diet, _plan, intolerances) {
        if (typeof diet !== 'string') throw Error(`diet is not a string`)
        if (typeof _plan !== 'string') throw Error(`plan is not a string`)
        if (!intolerances instanceof Array) throw Error(`intolerances is not array`)

        if (!diet.trim()) throw Error('You need to select a diet')
        if (!_plan.trim()) throw Error('You need to select a plan')

        const plan = data.selectPlan(_plan, diet)

        switch (diet) {
            case 'vegan':
                diet = 0
                break
            case 'vegetarian':
                diet = 1
                break
            case 'pescatarian':
                diet = 2
                break
            default :
            diet = 3
            break
        }
        
        if (plan) {
            
            let mealsWeek = plan.map(day => {
                let mealsDay = day.map(meal => {
                    const season = 'autum'
                    const category = meal.search.category
                    const subcategory = meal.search.subcategory
                    const isSpecialMeal =  meal.search.isSpecialMeal
                    const isCold = meal.search.isCold
                    const isLight = meal.search.isLight
                    

                    return fetch(`${this.url}/meals/find/${this._userId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                            'Authorization': `Bearer ${this._token}`
                        },
                        
                        body: JSON.stringify({ category, subcategory, diet, isSpecialMeal, isCold, intolerances, isLight, season })
                    })
                        
                        .then(res => res.json())

                        .then(res => {
                            if (res.error) throw Error(res.error)
                            
                            let resObject = {}
                            resObject.day = meal.day
                            resObject[meal.mealTime] = res.data

                            return resObject
                        })
                })
                
                return Promise.all(mealsDay)
            })


            return Promise.all(mealsWeek)
                .then((res) => {

                    const _mealPlan = {}
                    
                    _mealPlan.date = Date.now()
                    
                    _mealPlan.name = _plan
                    _mealPlan.days = [[]]

                    _mealPlan.days = res.map(day => {
                        let _day = {}
                        _day.day = day[0].day
                        _day.breakfast = []
                        _day.midMorning = []
                        _day.lunch = []
                        _day.afternoon = []
                        _day.dinner = []

                        day.forEach(meal => {
                            
                            meal.breakfast && (meal.breakfast.status = `${_day.day}breakfast`)
                            meal.midMorning && (meal.midMorning.status = `${_day.day}midMorning`)
                            meal.lunch && (meal.lunch.status = `${_day.day}lunch`)
                            meal.afternoon && (meal.afternoon.status = `${_day.day}afternoon`)
                            meal.dinner && (meal.dinner.status = `${_day.day}dinner`)

                            meal.breakfast && _day.breakfast.push(meal.breakfast)
                            meal.midMorning && _day.midMorning.push(meal.midMorning)
                            meal.lunch && _day.lunch.push(meal.lunch)
                            meal.afternoon && _day.afternoon.push(meal.afternoon)
                            meal.dinner && _day.dinner.push(meal.dinner)
                     
                        })
                        return _day
                    })
                    
                    const mealPlan = JSON.stringify(_mealPlan)
                    sessionStorage.setItem('mealPlan', mealPlan)

                    diet = JSON.stringify(diet);
                    sessionStorage.setItem('diet', diet)

                    intolerances = JSON.stringify(intolerances);
                    sessionStorage.setItem('intolerances', intolerances)
                })
        }
        else {
            throw Error('Plan not found')
        }

    },

     /****Sends POST request to save a meal plan
     * Saves meal plan to user
     * @param {object} mealplan 
     * @returns {Promise} 
     */
    saveMealPlan(mealplan) {
        
        if (mealplan === undefined) throw Error(`mealplan is undefined`)
        
        return fetch(`${this.url}/users/${this._userId}/savedmealplan`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({ mealplan })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    /****Sends DELETE request to delete a meal plan
     * Deletes meal plan from user
     * @param {number} mealplanId 
     * @returns {Promise} 
     */
    deleteSavedMealPlan(mealplanId) {
        if (typeof mealplanId !== 'number') throw Error(`mealplanId is not a number`)
        if (mealplanId === undefined) throw Error(`mealplanId is undefined`)
        if (mealplanId === '') throw Error(`mealplanId is empty or blank`)
        
        return fetch(`${this.url}/users/${this._userId}/savedmealplan/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({ mealplanId })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

     /****
     * Retrieves meal plan from session storage
     * @param {object} mealplanId 
     * @throws Error on undefined meal plan
     * @throws Error on empty meal plan
     */
    openMealPlan(_mealplan) {
        
        if (_mealplan === undefined) throw Error(`mealplan is undefined`)
        if (_mealplan === '') throw Error(`mealplan is empty`)

        let mealPlan = JSON.stringify(_mealplan)
        sessionStorage.setItem('mealPlan', mealPlan)

    },

    // findMeal(id) {

    //     let _mealPlan = sessionStorage.getItem('mealPlan')
    //     let mealPlan = JSON.parse(_mealPlan)

    //     const mealsDay = ['breakfast', 'midMorning', 'lunch', 'afternoon', 'dinner']
    //     let _meal = {}

    //     mealsDay.map(mealTime => {
    //         mealPlan.days.map(day => {
    //             day[mealTime] && day[mealTime].filter(meal => {
    //                 if (meal.id === id) _meal = meal
    //             })
    //         })
    //     })
    //     return _meal
    // },

      /**Sends POST request to save a meal
     * Adds a meal to favourites
     * @param {string} favouriteMealId 
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @returns {Promise}
     */
    addMealToFavourites(favouriteMealId) {

        if (favouriteMealId === undefined) throw Error(`favouriteMealId is undefined`)
        if (favouriteMealId === '') throw Error(`favouriteMealId is empty`)
        if (!favouriteMealId.trim()) throw Error(`favouriteMealId is blank`)
        
        return fetch(`${this.url}/users/${this._userId}/fav`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({ favouriteMealId })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    /****Sends DELETE request to delete a meal
     * Deletes meal from user
     * @param {number} favouriteMealId 
     * @returns {Promise} 
     */
    removeMealFromFavourites(favouriteMealId) {
        if (favouriteMealId === undefined) throw Error(`favouriteMealId is undefined`)
        if (favouriteMealId === '') throw Error(`favouriteMealId is empty`)
        if (!favouriteMealId.trim()) throw Error(`favouriteMealId is blank`)

        return fetch(`${this.url}/users/${this._userId}/fav/${favouriteMealId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({ favouriteMealId })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    // addMealToAvoidList(avoidMealId) {

    //     if (avoidMealId === undefined) throw Error(`avoidMealId is undefined`)
    //     if (avoidMealId === '') throw Error(`avoidMealId is empty`)
    //     if (!avoidMealId.trim()) throw Error(`avoidMealId is blank`)
        
    //     return fetch(`${this.url}/users/${this._userId}/avoid`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8',
    //             'Authorization': `Bearer ${this._token}`
    //         },
    //         body: JSON.stringify({ avoidMealId })
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)
    //         })
    // },

    // removeMealFromAvoidList(avoidMealId) {
    //     if (avoidMealId === undefined) throw Error(`avoidMealId is undefined`)
    //     if (avoidMealId === '') throw Error(`avoidMealId is empty`)
    //     if (!avoidMealId.trim()) throw Error(`avoidMealId is blank`)

    //     return fetch(`${this.url}/users/${this._userId}/fav/${avoidMealId}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8',
    //             'Authorization': `Bearer ${this._token}`
    //         },
    //         body: JSON.stringify({ avoidMealId })
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)
    //         })
    // },

      /**Sends GET request to retrieve a meal
     * Retrieves a meal
     * @param {string} mealId
     * @throws {Error in case of undefined data}
     * @throws {Error in case of input data empty or blank}
     * @returns {Promise} 
     */
    retrieveMeal(mealId) {
        if (mealId === undefined) throw Error(`mealId is undefined`)
        if (mealId === '') throw Error(`mealId is empty`)
        if (!mealId.trim()) throw Error(`mealId is blank`)

        return fetch(`${this.url}/users/${this._userId}/meal/${mealId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return res.data
            })
    },

    /**
     * Removes a meal from meal plan
     * @param {string} id 
     * @param {string} status 
     * @returns {mealplan}
     */
    removeMealFromMealPlan(id, status) {
        if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
        if (typeof status !== 'string') throw new TypeError(`${status} is not a string`)

        if (!id.trim().length) throw Error('id is empty or blank')
        if (!status.trim().length) throw Error('status is empty or blank')

        let _mealPlan = sessionStorage.getItem('mealPlan')
        let mealPlan = JSON.parse(_mealPlan)

        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        let index = status.indexOf('y')
        let mealDay = status.slice(0, index + 1)
        let mealTime = status.slice(index + 1)
        let dayIndex = 0

        days.forEach((day, index) => mealDay === day ? dayIndex = index : null)

        mealPlan.days[dayIndex][mealTime] = mealPlan.days[dayIndex][mealTime].filter(meal => {
            if (meal.id !== id) return meal
        })

        mealPlan = JSON.stringify(mealPlan);
        sessionStorage.setItem('mealPlan', mealPlan)
        _mealPlan = sessionStorage.getItem('mealPlan')
        mealPlan = JSON.parse(_mealPlan)

        return mealPlan
    },

     /**
     * Moves a meal from meal plan
     * @param {string} id 
     * @param {string} name
     * @param {string} status 
     * @param {string} previousStatus
     * @returns {mealplan}
     */
    moveMeal(id, name, status, previousStatus) {
        // if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
        // if (!id.trim().length) throw Error('id is empty or blank')

        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (!name.trim()) throw Error('name is empty or blank')

        if (typeof status !== 'string') throw new TypeError(`${status} is not a string`)
        if (!status.trim()) throw Error('status is empty or blank')

        if (typeof previousStatus !== 'string') throw new TypeError(`${previousStatus} is not a string`)
        if (!previousStatus.trim()) throw Error('previousStatus is empty or blank')

        let _mealPlan = sessionStorage.getItem('mealPlan')
        let mealPlan = JSON.parse(_mealPlan)

        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

        //PREVIOUS STATE
        let index = previousStatus.indexOf('y')
        let mealDay = previousStatus.slice(0, index + 1)
        let mealTime = previousStatus.slice(index + 1)
        let dayIndex = 0
        days.forEach((day, index) => mealDay === day ? dayIndex = index : null)

        //GET MEAL
        let meal = {}
        meal = mealPlan.days[dayIndex][mealTime].filter(meal => {
            if (meal.id === id) return meal
        })

        //DELETE MEAL FROM OLD STATE
        mealPlan.days[dayIndex][mealTime] = mealPlan.days[dayIndex][mealTime].filter(meal => {
            if (meal.id !== id) return meal
        })

        //UPDATE NEW STATE
        index = status.indexOf('y')
        mealDay = status.slice(0, index + 1)
        mealTime = status.slice(index + 1)
        meal[0].status = status

        days.forEach((day, index) => mealDay === day ? dayIndex = index : null)

        //ADD MEAL TO NEW STATE
        mealPlan.days[dayIndex][mealTime][mealPlan.days[dayIndex][mealTime].length] = meal[0]

        //SAVE IN SESSION STORAGE
        mealPlan = JSON.stringify(mealPlan);
        sessionStorage.setItem('mealPlan', mealPlan)
        _mealPlan = sessionStorage.getItem('mealPlan')
        mealPlan = JSON.parse(_mealPlan)

        return mealPlan
    },

    /**
     * Generates a shopping list
     * @returns {shopping list}
     */
    generateShoppingList() {

        let _mealPlan = sessionStorage.getItem('mealPlan')
        let mealPlan = JSON.parse(_mealPlan)

        const mealsDay = ['breakfast', 'midMorning', 'lunch', 'afternoon', 'dinner']
        let mainIngredients = []
        let optionalIngredients = []

        mealsDay.map(mealTime => {

            mealPlan.days.map((day, dayIndex) => {

                day[mealTime] && day[mealTime].length > 0 && day[mealTime].map(meal => {

                    if (meal.mainIngredients && meal.mainIngredients.length > 0) {
                        meal.mainIngredients.map(mainIngredient => {
                            if (!mainIngredients.includes(mainIngredient)) mainIngredients.push(mainIngredient)
                        })
                    }
                    if (meal.mainIngredients && meal.optionalIngredients.length > 0) {
                        meal.optionalIngredients.map(optionalIngredient => {
                            if (!optionalIngredients.includes(optionalIngredient) && !mainIngredients.includes(optionalIngredient)) optionalIngredients.push(optionalIngredient)
                        })
                    }
                })
            })
        })
        const shoppingList = {
            mainIngredients: mainIngredients,
            optionalIngredients: optionalIngredients
        }
        return shoppingList
    },

    // addNewMeal(name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, seasons) {
    //     if (!name) throw Error('You need to name your recipe')
    //     if(!diet) throw Error('You need to specidy a diet')
    //     if(!mainIngredients) throw Error('At least one main ingredient should be added')
    //     if (!seasons.length) throw Error('You need to select at least one season')

    //     if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
    //     if (typeof diet !== 'string') throw TypeError(`${diet} is not a string`)
    //     // if (instanceof mainIngredients !== 'Array') throw TypeError(`${mainIngredients} is not an array`)
    //     // if (instanceof optionalIngredients !== 'Array') throw TypeError(`${optionalIngredients} is not an array`)
    //     // if (instanceof intolerances !== 'Array') throw TypeError(`${intolerances} is not an array`)
    //     if (typeof linkRecipe !== 'string') throw TypeError(`${linkRecipe} is not a string`)
    //     if (typeof linkImage !== 'string') throw TypeError(`${linkImage} is not a string`)
    //     // if (instanceof seasons !== 'Array') throw TypeError(`${seasons} is not an array`)

    //     if (!name.trim()) throw Error('name is empty or blank')
    //     if (!diet.trim()) throw Error('diet is empty or blank')
    //     if (!linkRecipe.trim()) throw Error('linkRecipe is empty or blank')
    //     if (!linkImage.trim()) throw Error('linkImage is empty or blank')

    //     return fetch(`${this.url}/meals/addmeal`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8',
    //             'Authorization': `Bearer ${this._token}`
    //         },
    //         body: JSON.stringify({ name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, seasons })
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)
    //         })

    // },
    
    /**
     * Returns a date with dd/mm/yyyy format
     * @returns 
     */
    getDate() {

    let today = new Date()
    
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    
    let yyyy = today.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    } 
    if (mm < 10) {
      mm = '0' + mm
    } 
    today = dd + '/' + mm + '/' + yyyy
    
    return today
    }
}

export default logic
// module.exports = logic