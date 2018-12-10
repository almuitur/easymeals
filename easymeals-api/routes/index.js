const express = require('express')
const bodyParser = require('body-parser')
const logic = require('../logic')
const jwt = require('jsonwebtoken')
const bearerTokenParser = require('../utils/bearer-token-parser')
const jwtVerifier = require('./jwt-verifier')
const routeHandler = require('./route-handler')

const jsonBodyParser = bodyParser.json()
const router = express.Router()
const { env: { JWT_SECRET } } = process

router.post('/users', jsonBodyParser, (req, res) => {
    routeHandler(() => {
        const { name, surname, username, password } = req.body

        return logic.registerUser(name, surname, username, password)
            .then(() => {
                res.status(201)

                res.json({
                    message: `${username} successfully registered`
                })
            })
    }, res)
})

router.post('/auth', jsonBodyParser, (req, res) => {
    routeHandler(() => {
        const { username, password } = req.body

        return logic.authenticateUser(username, password)
            .then(id => {
                const token = jwt.sign({ sub: id }, JWT_SECRET)

                res.json({
                    data: {
                        id,
                        token
                    }
                })
            })
    }, res)
})

router.get('/users/:id', [bearerTokenParser, jwtVerifier], (req, res) => {
    
    routeHandler(() => {
        const { params: { id }, sub } = req

        if (id !== sub) throw Error('token sub does not match user id')

        return logic.retrieveUser(id)
            .then(user =>
                res.json({
                    data: user
                })
            )
    }, res)
})

router.patch('/users/:id', [bearerTokenParser, jwtVerifier, jsonBodyParser], (req, res) => {
    routeHandler(() => {
        const { params: { id }, sub, body: { name, surname, username, password, newPassword, confirmNewPassword } } = req

        if (id !== sub) throw Error('token sub does not match user id')
         
        return logic.updateUser(id, name ? name : null, surname ? surname : null, username ? username : null, password, newPassword ? newPassword : null, confirmNewPassword ? confirmNewPassword: null)
            .then(() =>
                res.json({
                    message: 'user updated'
                })
            )
    }, res)
})

router.post('/users/:id/fav', [bearerTokenParser, jwtVerifier, jsonBodyParser], (req, res) => {
    
    routeHandler(() => {
        const { params: { id }, sub, body: { favouriteMealId } } = req

        if (id !== sub) throw Error('token sub does not match user id')
        
        return logic.addFavouriteMeal(id, favouriteMealId)
            .then(() =>
                res.json({
                    message: 'favourite meal added'
                })
            )
    }, res)
})

router.delete('/users/:id/fav/:favouriteMealId', [bearerTokenParser, jwtVerifier, jsonBodyParser], (req, res) => {
    
    routeHandler(() => {
        const { params: { id, favouriteMealId }, sub } = req

        if (id !== sub) throw Error('token sub does not match user id')
        
        return logic.removeFavouriteMeal(id, favouriteMealId)
            .then(() =>
                res.json({
                    message: 'favourite meal removed'
                })
            )
    }, res)
})

router.post('/users/:id/avoid', [bearerTokenParser, jwtVerifier, jsonBodyParser], (req, res) => {
    
    routeHandler(() => {
        const { params: { id }, sub, body: { avoidMealId } } = req

        if (id !== sub) throw Error('token sub does not match user id')
        
        return logic.addAvoidMeal(id, avoidMealId)
            .then(() =>
                res.json({
                    message: 'meal added to avoid meals list'
                })
            )
    }, res)
})

router.delete('/users/:id/avoid/:avoidMealId', [bearerTokenParser, jwtVerifier, jsonBodyParser], (req, res) => {
    
    routeHandler(() => {
        const { params: { id, avoidMealId }, sub } = req

        if (id !== sub) throw Error('token sub does not match user id')
        
        return logic.removeAvoidMeal(id, avoidMealId)
            .then(() =>
                res.json({
                    message: 'meal removed from avoid meals list'
                })
            )
    }, res)
})

router.get('/users/:id/meal/:mealId', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        const { params: { id, mealId }, sub } = req

        if (id !== sub) throw Error('token sub does not match user id')

        return logic.retrieveMeal(mealId)
            .then(meal =>
                res.json({
                    data: meal
                })
            )
    }, res)
})

router.post('/users/:id/savedmealplan', [bearerTokenParser, jwtVerifier, jsonBodyParser], (req, res) => {
    
    routeHandler(() => {
        const { params: { id }, sub, body: { mealplan } } = req

        if (id !== sub) throw Error('token sub does not match user id')
        
        return logic.addMealplan(id, mealplan)
            .then(() =>
                res.json({
                    message: 'mealplan added to saved meal plans list'
                })
            )
    }, res)
})

router.delete('/users/:id/savedmealplan', [bearerTokenParser, jwtVerifier, jsonBodyParser], (req, res) => {
    
    routeHandler(() => {
        const { params: { id }, sub, body: { mealplanId } } = req

        if (id !== sub) throw Error('token sub does not match user id')
        
        return logic.removeMealplan(id, mealplanId)
            .then(() =>
                res.json({
                    message: 'mealplan removed from saved meal plans list'
                })
            )
    }, res)
})

router.post('/meals/find/:id', [bearerTokenParser, jwtVerifier, jsonBodyParser], (req, res) => {
    
    routeHandler(() => {
        const { params: { id }, sub, body: { category, subcategory, diet, isSpecialMeal, isCold, intolerances, isLight, season } } = req

        if (id !== sub) throw Error('token sub does not match user id')
   
        return logic.searchRandomMeal(category, subcategory, diet, isSpecialMeal, isCold, intolerances, isLight, season)
            .then(meal =>
                res.json({
                    data: meal
                })
            )
    }, res)
})

router.post('/meals/addmeal', jsonBodyParser, (req, res) => {
    routeHandler(() => {
        const { name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, seasons } = req.body

        return logic.addNewMeal(name, diet, mainIngredients, optionalIngredients ? optionalIngredients : null, intolerances ? intolerances : null, linkRecipe ? linkRecipe : null, linkImage ? linkImage : null, seasons)
            .then(() => {
                res.status(201)
                
                res.json({
                    message: `meal successfully added to database`
                })
            })
    }, res)
})

module.exports = router