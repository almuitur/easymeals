const mongoose = require('mongoose')

const { Meal, Day, MealPlan, User } = require('./schemas')

module.exports = {
    mongoose,
    models: {
        Meal: mongoose.model('Meal', Meal),
        Day: mongoose.model('Day', Day),
        MealPlan: mongoose.model('MealPlan', MealPlan),
        User: mongoose.model('User', User)
    }
}