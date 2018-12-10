const { models: { Meal, Day, MealPlan, User }, mongoose: { Types: { ObjectId } } } = require('easymeals-data')
const { AlreadyExistsError, AuthError, NotAllowedError, NotFoundError, ValueError } = require('../errors')
const validate = require('../utils/validate')
const fs = require('fs')
const path = require('path')

const logic = {

    /**
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
    registerUser(name, surname, username, password) {
        validate([{ key: 'name', value: name, type: 'string' }, { key: 'surname', value: surname, type: 'string' }, { key: 'username', value: username, type: 'string' }, { key: 'password', value: password, type: 'string' }])

        return (async () => {

            let user = await User.findOne({ username })

            if (user) throw new AlreadyExistsError(`username ${username} already registered`)

            user = new User({ name, surname, username, password })

            await user.save()
        })()
    },
    
    /**
     * Authenticates a user
     * @param {string} username 
     * @param {string} password 
     * @throws {AuthError in case of wrong combination of username and password}
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @returns {Promise}
     */
    authenticateUser(username, password) {
        
        validate([{ key: 'username', value: username, type: 'string' }, { key: 'password', value: password, type: 'string' }])

        return (async () => {
            const user = await User.findOne({ username })

            if (!user || user.password !== password) throw new AuthError('invalid username or password')

            return user.id
        })()
    },

    /**
     * Retrieves a user
     * @param {string} id 
     * @throws {NotFoundError in case of user id not found}
     * @returns {Promise}
     */
    retrieveUser(id) {
        validate([{ key: 'id', value: id, type: 'string' }])
        return (async () => {
            const user = await User.findById(id, { '_id': 0, password: 0, __v: 0 }).lean()

            if (!user) throw new NotFoundError(`user with id ${id} not found`)

            user.id = id

            return user
        })()
    },

    // updateUser(id, name, surname, username, oldPassword, newPassword, confirmNewPassword) {
    //     validate([
    //         { key: 'id', value: id, type: 'string' },
    //         { key: 'name', value: name, type: 'string', optional: true },
    //         { key: 'surname', value: surname, type: 'string', optional: true },
    //         { key: 'username', value: username, type: 'string', optional: true },
    //         { key: 'oldPassword', value: oldPassword, type: 'string' },
    //         { key: 'newPassword', value: newPassword, type: 'string', optional: true },
    //         { key: 'confirmNewPassword', value: confirmNewPassword, type: 'string', optional: true }
    //     ])

    //     return (async () => {

    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //         if (user.password !== oldPassword) throw new AuthError('invalid password')

    //         if (username) {
    //             const _user = await User.findOne({ username })

    //             if (_user) throw new AlreadyExistsError(`username ${username} already exists`)

    //             name != null && (user.name = name)
    //             surname != null && (user.surname = surname)
    //             user.username = username

    //             if (newPassword != null && newPassword !== confirmNewPassword) throw new ValueError('new passwords provided do not match')
    //             user.password = newPassword

    //             await user.save()
    //         } else {
    //             name != null && (user.name = name)
    //             surname != null && (user.surname = surname)
    //             newPassword != null && (user.password = newPassword)
    //         }
    //         await user.save()
    //     })()
    // },

    /**
     * Search of a random meal
     * @param {string} category 
     * @param {string} subcategory 
     * @param {number} diet 
     * @param {boolean} isSpecialMeal 
     * @param {boolean} isCold 
     * @param {array} intolerances 
     * @param {boolean} isLight 
     * @param {string} season 
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @returns {Promise}
     */
    searchRandomMeal(category, subcategory, diet, isSpecialMeal, isCold, intolerances, isLight, season) {
        
        validate([
            { key: 'category', value: category, type: 'string' },
            { key: 'subcategory', value: subcategory, type: 'string' },
            { key: 'diet', value: diet, type: 'number' },
            { key: 'isSpecialMeal', value: isSpecialMeal, type: 'boolean', optional: true },
            { key: 'isCold', value: isCold, type: 'boolean', optional: true },
            { key: 'intolerances', value: intolerances, type: ['string'] },
            { key: 'isLight', value: isLight, type: 'boolean', optional: true },
            { key: 'season', value: season, type: 'string' }
        ])
        
        const queryObject = {
            category,
            subcategory,
            diet: { $lte: diet },
            intolerances: { $nin: intolerances },
            season: { $in: season }
        }

        if (isSpecialMeal!=null) queryObject.isSpecialMeal = isSpecialMeal

        if (isCold) queryObject.isCold = isCold

        if (isLight) queryObject.isLight = isLight

        return (async () => {
            
            const meals = await Meal.find(queryObject).lean()
            //     //TO CONSIDER
            //     // const user = await User.findById(id, { '_id': 0, password: 0, postits: 0, __v: 0 }).lean()
            //     // if (!user) throw new NotFoundError(`user with id ${id} not found`)
            //     user.savedMealPlans = user.savedMealPlans.filter(_mealplan => (_mealplan.date !== mealplanId))
            //     //name != null && (user.name = name)

            //CHECKS IF RANDOM MEAL IS CONTAINED WITHIN AVOID MEALS LIST OF USER
            // const user = await User.findById(id, { '_id': 0, password: 0, postits: 0, __v: 0 }).lean()


            // let counter = 0
            // let meal
            // do {
            let meal = {}
            if (meals.length) {
                meal = meals[Math.floor(Math.random() * meals.length)]
                delete meal.__v
                let copy = Object.assign({}, meal)
                meal.id = copy._id.toString()
                delete meal._id
            }
            //     counter++
            // }
            // while(user.mealsToAvoid.includes(meal.id) && counter < 10)          

            return meal
        })()
    },

    /**
     * Add meal plan to favourites
     * @param {string} id 
     * @param {object} mealplan 
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @throws {NotFoundError in case of user id not found}
     * @throws {ValueError in case of user id not valid}
     * @returns {Promise}
     */
    addMealplan(id, mealplan) {
        validate([
            { key: 'id', value: id, type: 'string' }
            // { key: 'mealplan', value: mealplan, type: Object },
        ])

        if (!ObjectId.isValid(id)) throw new ValueError(`id is not valid ${id}`)

        return (async () => {

            const user = await User.findById(id)

            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            // if (user.savedMealPlans.includes(mealplan)) throw new AlreadyExistsError(`mealplan already added to saved meal plan list`) //NOT WORKING, REVIEW!!!
            
            mealplan.date = Date.now()
            
            user.savedMealPlans.push(mealplan)

            await user.save()
        })()
    },

    /**
     * Deletes meal plan from favourites
     * @param {string} id 
     * @param {number} mealplanId 
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @throws {NotFoundError in case of user id not found}
     * @throws {Error in case of user favourite list being empty}
     * @returns {Promise}
     */
    removeMealplan(id, mealplanId) {
        validate([
            { key: 'id', value: id, type: 'string' },
            { key: 'mealplanId', value: mealplanId, type: 'number' },
        ])
        return (async () => {

            const user = await User.findById(id)

            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            if (!user.savedMealPlans) throw Error(`user with id ${id} has no saved mealplans`)
            
            user.savedMealPlans = user.savedMealPlans.filter(_mealplan => (_mealplan.date !== mealplanId))

            await user.save()
        })()
    },

    // addNewMeal(name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, seasons) {
    //     validate([{ key: 'name', value: name, type: 'string' }, { key: 'surname', value: surname, type: 'string' }, { key: 'username', value: username, type: 'string' }, { key: 'password', value: password, type: 'string' }])

    //     return (async () => {

    //         meal = new Meal({ name, diet, category, subcategory, mainIngredients, optionalIngredients, isSpecialMeal, isColdDish, intolerances, isLight, season, recipeLink, imageLink, status })

    //         await meal.save()
    //     })()
    // },

    /**
     * Adds a meal to favourites
     * @param {string} id 
     * @param {string} favouriteMealId 
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @throws {NotFoundError in case of user id not found}
     * @returns {Promise}
     */
    addFavouriteMeal(id, favouriteMealId) {

        validate([
            { key: 'id', value: id, type: 'string' },
            { key: 'favouriteMealId', value: favouriteMealId, type: 'string' },
        ])
        return (async () => {

            const user = await User.findById(id)

            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            if (user.favouriteMeals.includes(favouriteMealId)) throw new AlreadyExistsError(`meal already added to favourites`)

            user.favouriteMeals.push(favouriteMealId)

            await user.save()
        })()
    },

    /**
     * Removes a meal from favourites
     * @param {string} id 
     * @param {string} favouriteMealId 
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @throws {NotFoundError in case of user id not found}
     * @throws {Error in case of user favourite list being empty}
     * @returns {Promise}
     */
    removeFavouriteMeal(id, favouriteMealId) {

        validate([
            { key: 'id', value: id, type: 'string' },
            { key: 'favouriteMealId', value: favouriteMealId, type: 'string' },
        ])
        return (async () => {

            const user = await User.findById(id)

            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            if (!user.favouriteMeals) throw Error(`favourites list of user with id ${id} is empty`)
            
            if (!(user.favouriteMeals.includes(favouriteMealId))) throw new NotFoundError(`meal with id ${id} not found`)

            user.favouriteMeals = user.favouriteMeals.filter(id => {
                if (id !== favouriteMealId) return id
            })

            await user.save()
        })()
    },

    // addAvoidMeal(id, avoidMealId) {

    //     validate([
    //         { key: 'id', value: id, type: 'string' },
    //         { key: 'avoidMealId', value: avoidMealId, type: 'string' },
    //     ])
    //     return (async () => {

    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)
    //         if (user.mealsToAvoid.includes(avoidMealId)) throw new AlreadyExistsError(`meal already added to avoid meals list`)

    //         user.mealsToAvoid.push(avoidMealId)

    //         await user.save()
    //     })()
    // },

    // removeAvoidMeal(id, avoidMealId) {

    //     validate([
    //         { key: 'id', value: id, type: 'string' },
    //         { key: 'avoidMealId', value: avoidMealId, type: 'string' },
    //     ])
    //     return (async () => {

    //         const user = await User.findById(id)

    //         if (!user) throw new NotFoundError(`user with id ${id} not found`)
    //         if (!user.mealsToAvoid.includes(avoidMealId)) throw new NotFoundError(`meal with id ${id} not found`)
    //         if (!user.mealsToAvoid) throw Error(`avoids list of user with id ${id} is empty`)

    //         user.mealsToAvoid = user.mealsToAvoid.filter(id => {
    //             if (id !== avoidMealId) return id
    //         })

    //         await user.save()
    //     })()
    // },

    /**
     * Retrieves a meal
     * @param {string} mealId
     * @throws {TypeError in case of wrong input data}
     * @throws {ValueError in case of input data empty or blank}
     * @throws {NotFoundError in case of meal id not found}
     * @returns {Promise} 
     */
    retrieveMeal(mealId) {
        validate([{ key: 'mealId', value: mealId, type: 'string' }])

        return (async () => {
            const meal = await Meal.findById(mealId, { '_id': 0, __v: 0 }).lean()

            if (!meal) throw new NotFoundError(`meal with id ${mealId} not found`)

            return meal
        })()
    }
}

module.exports = logic