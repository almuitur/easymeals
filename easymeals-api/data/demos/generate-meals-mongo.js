require('dotenv').config()

const { mongoose, models: { Meal } } = require('easymeals-data')
const meals = require('./meals')

const { env: { MONGO_URL } } = process;

(async () => {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true })

    await Meal.deleteMany()

    await Meal.insertMany(meals)

    await mongoose.disconnect()
})()
