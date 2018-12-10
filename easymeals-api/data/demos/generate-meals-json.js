const meals = require('./meals')

const fs = require('fs')
const path = require('path')

fs.writeFileSync(path.join(__dirname, 'meals.json'), JSON.stringify(meals, null, 4))

// fs.writeFileSync(path.join(__dirname, 'meals.json'), JSON.stringify(meals))