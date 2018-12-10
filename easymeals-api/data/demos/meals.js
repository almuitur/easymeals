const meals = []

meals.push({
    name: 'Corn flakes',
    diet: 0,
    category: 'carb',
    subcategory: 'flake',
    mainIngredients: ['corn'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Low sugar rice flakes',
    diet: 0,
    category: 'carb',
    subcategory: 'flake',
    mainIngredients: ['rice'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Rice flakes',
    diet: 0,
    category: 'carb',
    subcategory: 'flake',
    mainIngredients: ['rice'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Oatmeal',
    diet: 0,
    category: 'carb',
    subcategory: 'flake',
    mainIngredients: ['oat'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Muesli',
    diet: 0,
    category: 'carb',
    subcategory: 'flake',
    mainIngredients: ['oat', 'pumpkin seeds', 'nuts', 'chia Seeds'],
    optionalIngredients: ['cacao', 'cocounit', 'dried fruit'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://frommybowl.com/easy-muesli-recipe/',
    imageLink: ''
})

meals.push({
    name: 'Avocado toast',
    diet: 0,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'bread'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Avocado toast (gluten-free)',
    diet: 0,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'gluten-free bread'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Special veggie toast',
    diet: 0,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'kale', 'tomato', 'mushroom','bread'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Gluten free Special veggie toast',
    diet: 0,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'kale', 'tomato', 'mushroom','bread'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Pan tumaca',
    diet: 0,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['tomato', 'olive oil'],
    optionalIngredients: ['salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: ['gluten'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Gluten free Pan tumaca',
    diet: 0,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['tomato', 'olive oil'],
    optionalIngredients: ['salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Veggie toast',
    diet: 0,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['lettuce', 'tomato'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: ['gluten'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Veggie toast (gluten-free)',
    diet: 0,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['lettuce', 'tomato'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Avocado toast with egg',
    diet: 1,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'egg', 'bread'],
    optionalIngredients: ['olive oil', 'salt', 'rocket', 'pine nuts'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Avocado toast with egg (gluten-free)',
    diet: 1,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'egg', 'gluten-free bread'],
    optionalIngredients: ['olive oil', 'salt', 'rocket', 'pine nuts'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Ham and cheese toast',
    diet: 3,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['ham', 'cheese', 'bread'],
    optionalIngredients: ['olive oil', 'tomato', 'basil','salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Gluten-free ham and cheese toast',
    diet: 3,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['ham', 'cheese', 'gluten-free bread'],
    optionalIngredients: ['olive oil', 'tomato', 'basil','salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Gluten-free avocado toast',
    diet: 0,
    category: 'carb',
    subcategory: 'toast',
    mainIngredients: ['avocado', 'gluten-free bread'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Margarita Pizza',
    diet: 0,
    category: 'carb',
    subcategory: 'pizza',
    mainIngredients: ['pizza dough', 'tomato sauce', 'mozzarella'],
    optionalIngredients: ['basil', 'spicy olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten', 'lactose'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/margarita-pizza-ab4fe63f36e9e6aed813bb0bf1295b02/margarita+pizza',
    imageLink: ''
})

meals.push({
    name: 'Gluten-free margarita Pizza',
    diet: 0,
    category: 'carb',
    subcategory: 'pizza',
    mainIngredients: ['gluten-free pizza dough', 'tomato sauce', 'mozzarella'],
    optionalIngredients: ['basil', 'spicy olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/margarita-pizza-a5ac95f928dbcb07e25d1ce7aa5c4a6e/margarita+pizza/gluten-free',
    imageLink: ''
})

meals.push({
    name: 'Gluten-free margarita Pizza (lactose free)',
    diet: 0,
    category: 'carb',
    subcategory: 'pizza',
    mainIngredients: ['gluten-free pizza dough', 'tomato sauce', 'lactose-free cheese'],
    optionalIngredients: ['basil', 'spicy olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/margarita-pizza-a5ac95f928dbcb07e25d1ce7aa5c4a6e/margarita+pizza/gluten-free',
    imageLink: ''
})

meals.push({
    name: 'Roman style carbonara pasta',
    diet: 3,
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['pasta', 'egg', 'bacon'],
    optionalIngredients: ['salt', 'black pepper', 'parmesano'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Gluten-free Roman style carbonara pasta',
    diet: 3,
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['gluten-free pasta', 'egg', 'bacon'],
    optionalIngredients: ['salt', 'black pepper', 'parmesano'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Pasta with pesto sauce',
    diet: 3,
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['pasta', 'pesto sauce'],
    optionalIngredients: ['salt', 'parmesano', 'basil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/ramp-pesto-pasta-ee678be26349cac7dddb2cb70a16887a/pasta+pesto',
    imageLink: ''
})

meals.push({
    name: 'Gluten-free pasta with pesto sauce',
    diet: 3,
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['gluten-free pasta', 'pesto sauce'],
    optionalIngredients: ['salt', 'parmesano', 'basil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/ramp-pesto-0ad0d2c971532de1b042d51c42210855/pasta+pesto/gluten-free',
    imageLink: ''
})

meals.push({
    name: 'Couscous and roasted vegetables',
    diet: 1,
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['couscous', 'red pepper', 'green pepper', 'onion', 'courgette', 'eggplant'],
    optionalIngredients: ['salt', 'olive oil', 'garlic', 'black pepper', 'soy sauce'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Plain rice',
    diet: 0,
    category: 'carb',
    subcategory: 'rice',
    mainIngredients: ['rice'],
    optionalIngredients: ['salt'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/simple-white-rice-70d295b410e7083af8da2b1625ffd868/white+rice',
    imageLink: ''
})

meals.push({
    name: 'Prawn and soy noodles',
    diet: 2,
    category: 'carb',
    subcategory: 'rice',
    mainIngredients: ['rice noodles', 'prawn', 'soy sauce'],
    optionalIngredients: ['salt', 'garlic', 'black pepper', 'green pepper', 'carrot'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Cashew and Prawn Rice',
    diet: 2,
    category: 'carb',
    subcategory: 'rice',
    mainIngredients: ['basmatti rice', 'prawn', 'cashew'],
    optionalIngredients: ['salt', 'tomato', 'cumin', 'chilli', 'onion', 'coriander'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/cashew-prawn-rice-285f55cbf61f184605a79d62a57ba7f9/rice+flakes/gluten-free',
    imageLink: ''
})

meals.push({
    name: 'Cuban style Rice',
    diet: 1,
    category: 'carb',
    subcategory: 'rice',
    mainIngredients: ['rice', 'tomato sauce', 'egg'],
    optionalIngredients: ['salt', 'onion', 'pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Crepe',
    diet: 1,
    category: 'carb',
    subcategory: 'pancake',
    mainIngredients: ['egg', 'plain flour', 'milk', 'butter'],
    optionalIngredients: ['salt', 'sugar', 'lemon', 'honey'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: ['gluten', 'lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/easy-pancakes-c04e2fced61a640936512c676f3efb0a/plain+crepe',
    imageLink: 'https://images.pexels.com/photos/315708/pexels-photo-315708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Crepe (gluten-free)',
    diet: 1,
    category: 'carb',
    subcategory: 'pancake',
    mainIngredients: ['egg', 'gluten-free flour', 'milk', 'butter'],
    optionalIngredients: ['salt'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/basic-buckwheat-crepes-recipes-691424a3d15620c78f3d3626a1fd4f46/crepe/gluten-free',
    imageLink: 'https://images.pexels.com/photos/315708/pexels-photo-315708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


meals.push({
    name: 'Crepe (gluten and lactose free)',
    diet: 0,
    category: 'carb',
    subcategory: 'pancake',
    mainIngredients: ['gluten-free flour', 'almond milk', 'almond butter'],
    optionalIngredients: ['salt'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/basic-buckwheat-crepes-recipes-691424a3d15620c78f3d3626a1fd4f46/crepe/gluten-free',
    imageLink: 'https://images.pexels.com/photos/315708/pexels-photo-315708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Green beans and potatoes',
    diet: 0,
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['green bean', 'potato'],
    optionalIngredients: ['salt', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/italian-green-beans-and-potatoes-022a855c240097c58b3d20d299d87ffc/green+beans+potato',
    imageLink: ''
})

meals.push({
    name: 'Mango ceviche',
    diet: 0,
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['mango', 'tomato', 'mustard', 'onion', 'soy sauce'],
    optionalIngredients: ['salt', 'olive oil', 'black pepper'],
    isSpecialMeal: true,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/italian-green-beans-and-potatoes-022a855c240097c58b3d20d299d87ffc/green+beans+potato',
    imageLink: ''
})

meals.push({
    name: 'Carrots and potatoes',
    diet: 0,
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['carrot', 'potato'],
    optionalIngredients: ['black pepper','salt', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Baked green beans, potates and carrots',
    diet: 0,
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['green bean', 'potato', 'carrot'],
    optionalIngredients: ['salt', 'olive oil', 'chili', 'shallot', 'ginger', 'garlic', 'lemon', 'lime', 'turmeric', 'clove', 'coconut milk', 'tamari'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/new-potato-rendang-green-beans-recipes-de16e620b23bb5341b5090765c6d5716/green+bean+potato+carrot',
    imageLink: ''
})

meals.push({
    name: 'Spinach and potatoes',
    diet: 0,
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['spinach', 'potato'],
    optionalIngredients: ['salt', 'garlic', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Collard greens and potatoes',
    diet: 0,
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['collard greens', 'potato'],
    optionalIngredients: ['salt', 'garlic', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Kale, potatoes and carrots',
    diet: 0,
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['kale', 'potato', 'carrot'],
    optionalIngredients: ['stock','salt', 'olive oil', 'garlic', 'lemon', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/dinosaur-kale-with-baby-potatoes-06d166d1d0f534913467459a146984c9/kale+potato',
    imageLink: ''
})

meals.push({
    name: 'Trinxat from la Cerdanya',
    diet: 3,
    category: 'vegetable',
    subcategory: 'none',
    mainIngredients: ['cabbage', 'potato', 'garlic', 'bacon'],
    optionalIngredients: ['salt', 'olive oil', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Dairy milk',
    diet: 1,
    category: 'milk',
    subcategory: 'none',
    mainIngredients: ['dairy milk'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Skimmed dairy milk',
    diet: 1,
    category: 'milk',
    subcategory: 'none',
    mainIngredients: ['skimmed dairy milk'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Soy milk',
    diet: 0,
    category: 'milk',
    subcategory: 'none',
    mainIngredients: ['soy milk'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Almond milk',
    diet: 0,
    category: 'milk',
    subcategory: 'none',
    mainIngredients: ['almonds'],
    optionalIngredients: ['sugar', 'salt'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Hazelnut milk',
    diet: 0,
    category: 'milk',
    subcategory: 'none',
    mainIngredients: ['hazelnuts'],
    optionalIngredients: ['sugar', 'salt'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Oat milk',
    diet: 0,
    category: 'milk',
    subcategory: 'none',
    mainIngredients: ['oat'],
    optionalIngredients: ['sugar', 'salt'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Red apple',
    diet: 0,
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['apple'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Green apple',
    diet: 0,
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['apple'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Orange',
    diet: 0,
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['orange'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Clementine',
    diet: 0,
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['clementine'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Kiwi',
    diet: 0,
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['kiwi'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Banana',
    diet: 0,
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['banana'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Peach',
    diet: 0,
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['peach'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['summer'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Apricot',
    diet: 0,
    category: 'fruit',
    subcategory: 'fruit',
    mainIngredients: ['peach'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['summer'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Orange juice',
    diet: 0,
    category: 'fruit',
    subcategory: 'juice',
    mainIngredients: ['orange'],
    optionalIngredients: ['mint', 'sugar'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Orange and carrot juice',
    diet: 0,
    category: 'fruit',
    subcategory: 'juice',
    mainIngredients: ['orange', 'carrot'],
    optionalIngredients: ['ginger'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/simple-orange-carrot-juice-recipe-f2f2736d1554c88bdb8459f1ca562bd9/orange+carrot+juice',
    imageLink: 'https://images.pexels.com/photos/162669/carrot-juice-juice-carrots-vegetable-juice-162669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Macedonia',
    diet: 0,
    category: 'fruit',
    subcategory: 'none',
    mainIngredients: ['peach', 'banana', 'grape', 'pineapple'],
    optionalIngredients: ['mint'],
    isSpecialMeal: true,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Strawberry low-fat milkshake',
    diet: 1,
    category: 'fruit',
    subcategory: 'milkshake',
    mainIngredients: ['strawberry', 'skimmed dairy milk'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Strawberry milkshake',
    diet: 0,
    category: 'fruit',
    subcategory: 'milkshake',
    mainIngredients: ['strawberry', 'almond milk'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Hazelnut and chocolate milkshake',
    diet: 0,
    category: 'fruit',
    subcategory: 'milkshake',
    mainIngredients: ['cocoa', 'hazelnut milk'],
    optionalIngredients: [],
    isSpecialMeal: true,
    isColdDish: true,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'York Ham panini',
    diet: 3,
    category: 'snack',
    subcategory: 'panini',
    mainIngredients: ['bread', 'york ham'],
    optionalIngredients: ['tomato', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: ['gluten'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'York Ham panini (Gluten-free)',
    diet: 3,
    category: 'snack',
    subcategory: 'panini',
    mainIngredients: ['gluten free bread', 'york ham'],
    optionalIngredients: ['tomato', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Ham panini',
    diet: 3,
    category: 'snack',
    subcategory: 'panini',
    mainIngredients: ['bread', 'ham'],
    optionalIngredients: ['tomato', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Avocado panini',
    diet: 0,
    category: 'snack',
    subcategory: 'panini',
    mainIngredients: ['bread', 'avocado'],
    optionalIngredients: ['tomato', 'olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: ['gluten'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Gluten-free Avocado panini',
    diet: 0,
    category: 'snack',
    subcategory: 'panini',
    mainIngredients: ['gluten free bread', 'avocado'],
    optionalIngredients: ['tomato', 'olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Veggie panini',
    diet: 0,
    category: 'snack',
    subcategory: 'panini',
    mainIngredients: ['bread', 'tomato', 'lettuce'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: ['gluten'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Gluten-free veggie panini',
    diet: 0,
    category: 'snack',
    subcategory: 'panini',
    mainIngredients: ['gluten free bread', 'tomato', 'lettuce'],
    optionalIngredients: ['olive oil', 'salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Walnuts',
    diet: 0,
    category: 'snack',
    subcategory: 'nuts',
    mainIngredients: ['walnuts'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Almonds',
    diet: 0,
    category: 'snack',
    subcategory: 'nuts',
    mainIngredients: ['almonds'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Hazelnuts',
    diet: 0,
    category: 'snack',
    subcategory: 'nuts',
    mainIngredients: ['hazelnuts'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Gluten-free ham panini',
    diet: 3,
    category: 'snack',
    subcategory: 'panini',
    mainIngredients: ['gluten.free bread', 'ham'],
    optionalIngredients: ['tomato', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Chickpeas and egg',
    diet: 1,
    category: 'legume',
    subcategory: 'none',
    mainIngredients: ['chickpeas', 'egg'],
    optionalIngredients: ['salt', 'olive oil', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Chickpeas salad',
    diet: 0,
    category: 'legume',
    subcategory: 'none',
    mainIngredients: ['chickpeas', 'tomato', 'celery', 'lettuce', 'apple', 'beetroot'],
    optionalIngredients: ['salt', 'olive oil', 'vinager', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Sauteed chickpeas',
    diet: 0,
    category: 'legume',
    subcategory: 'none',
    mainIngredients: ['chickpeas', 'garlic', 'tomato sauce', 'spinach'],
    optionalIngredients: ['salt', 'olive oil', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Ham and peas',
    diet: 3,
    category: 'legume',
    subcategory: 'none',
    mainIngredients: ['garden peas', 'ham', 'onion'],
    optionalIngredients: ['salt', 'olive oil', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Peas and potatoes',
    diet: 0,
    category: 'legume',
    subcategory: 'none',
    mainIngredients: ['garden peas', 'potatoes'],
    optionalIngredients: ['salt', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Lentils',
    diet: 0,
    category: 'legume',
    subcategory: 'none',
    mainIngredients: ['lentils', 'potatoes', 'onion', 'carrot', 'garlic'],
    optionalIngredients: ['salt', 'olive oil', 'rice'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Hummus',
    diet: 0,
    category: 'legume',
    subcategory: 'none',
    mainIngredients: ['chickpeas', 'tahini', 'lemon', 'paprika', 'olive oil'],
    optionalIngredients: ['salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Beans and sausage',
    diet: 3,
    category: 'legume',
    subcategory: 'none',
    mainIngredients: ['beans', 'sausage'],
    optionalIngredients: ['salt', 'olive oil', 'garlic', 'parsley'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Hamburger',
    diet: 3,
    category: 'protein',
    subcategory: 'meat',
    mainIngredients: ['hamburger', 'hamburger bread'],
    optionalIngredients: ['tomato', 'lettuce', 'ketchup', 'cheese', 'bacon'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Hamburger (gluten-free)',
    diet: 3,
    category: 'protein',
    subcategory: 'meat',
    mainIngredients: ['hamburger', 'hamburger gluten-free bread'],
    optionalIngredients: ['tomato', 'lettuce', 'ketchup', 'cheese', 'bacon'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Pasta salad with tomato and pesto',
    diet: 0,
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['pasta', 'lettuce', 'tomato', 'basil', 'pesto sauce'],
    optionalIngredients: ['nuts'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Gluten-free pasta salad with tomato and pesto',
    diet: 0,
    category: 'carb',
    subcategory: 'pasta',
    mainIngredients: ['gluten-free pasta', 'lettuce', 'tomato', 'basil', 'pesto sauce'],
    optionalIngredients: ['nuts'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Rocket, tomato and avocado salad',
    diet: 0,
    category: 'salad',
    subcategory: 'none',
    mainIngredients: ['rocket', 'tomato', 'avocado'],
    optionalIngredients: ['olives','nuts', 'bread', 'salt', 'olive oil', 'fresh cheese'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Greek salad',
    diet: 0,
    category: 'salad',
    subcategory: 'none',
    mainIngredients: ['tomato', 'basil', 'mozzarella', 'olives'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: ['lactose'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

meals.push({
    name: 'Menestra',
    diet: 0,
    category: 'soup',
    subcategory: 'none',
    mainIngredients: ['collard greens', 'green beans', 'carrot', 'potato'],
    optionalIngredients: ['salt', 'olive oil', 'garlic', 'lemon', 'black pepper', 'onion', 'artichoke', 'mushroom', 'parsley', 'sweet paprika', 'bay leave'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: 'https://www.edamam.com/recipe/menestra-spanish-style-veggie-stew0too-c19dfef6aa3f8e4f1c1c5c84cb9f1b33/menestra',
    imageLink: ''
})

meals.push({
    name: 'Fish soup',
    diet: 2,
    category: 'soup',
    subcategory: 'none',
    mainIngredients: ['rice', 'onion', 'hake'],
    optionalIngredients: ['clams', 'salt', 'olive oil', 'garlic', 'parsley', 'black pepper', 'tomato'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Chicken soup',
    diet: 3,
    category: 'soup',
    subcategory: 'none',
    mainIngredients: ['orzo', 'onion', 'chicken broth'],
    optionalIngredients: ['chickpeas', 'salt', 'olive oil', 'tomato'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Courgette soup',
    diet: 0,
    category: 'soup',
    subcategory: 'none',
    mainIngredients: ['courgette', 'potato', 'onion', 'broth'],
    optionalIngredients: ['salt', 'olive oil', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Carrot soup',
    diet: 0,
    category: 'soup',
    subcategory: 'none',
    mainIngredients: ['carrot', 'potato', 'leek', 'broth'],
    optionalIngredients: ['salt', 'olive oil', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Pumpking and carrot soup',
    diet: 0,
    category: 'soup',
    subcategory: 'none',
    mainIngredients: ['pumpking', 'carrot', 'potato', 'leek', 'broth'],
    optionalIngredients: ['salt', 'olive oil', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Gazpacho',
    diet: 0,
    category: 'soup',
    subcategory: 'none',
    mainIngredients: ['tomato', 'red pepper', 'cucumber', 'garlic', 'olive oil', 'apple vinegar'],
    optionalIngredients: ['salt'],
    isSpecialMeal: false,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Battered hake',
    diet: 2,
    category: 'protein',
    subcategory: 'fish',
    mainIngredients: ['hake', 'egg', 'breadcrumbs', 'olive oil'],
    optionalIngredients: ['salt', 'lemon', 'black pepper', 'tartar sauce'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Baked Seabream and potatoes',
    diet: 2,
    category: 'protein',
    subcategory: 'fish',
    mainIngredients: ['seabream', 'potato', 'olive oil'],
    optionalIngredients: ['salt', 'lemon', 'black pepper', 'onion'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Grilled Seabream',
    diet: 2,
    category: 'protein',
    subcategory: 'fish',
    mainIngredients: ['seabream', 'olive oil'],
    optionalIngredients: ['salt', 'lemon', 'black pepper', 'onion'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Baked Seabass',
    diet: 2,
    category: 'protein',
    subcategory: 'fish',
    mainIngredients: ['seabass', 'olive oil'],
    optionalIngredients: ['salt', 'lemon', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Grilled tofu',
    diet: 0,
    category: 'protein',
    subcategory: 'fish',
    mainIngredients: ['tofu'],
    optionalIngredients: ['olive oil', 'salt', 'lemon', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Portobello steak',
    diet: 0,
    category: 'protein',
    subcategory: 'meat',
    mainIngredients: ['portobello mushroom'],
    optionalIngredients: ['olive oil', 'salt', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Veggie hamburger',
    diet: 0,
    category: 'protein',
    subcategory: 'meat',
    mainIngredients: ['bread', 'lentils', 'onion', 'red pepper', 'carrot'],
    optionalIngredients: ['olive oil', 'salt', 'black pepper'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Vegan omelette',
    diet: 0,
    category: 'protein',
    subcategory: 'egg',
    mainIngredients: ['chickpea flour', 'potato', 'onion'],
    optionalIngredients: ['olive oil', 'salt', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Gluten free Veggie hamburger',
    diet: 0,
    category: 'protein',
    subcategory: 'meat',
    mainIngredients: ['gluten free bread', 'lentils', 'onion', 'red pepper', 'carrot'],
    optionalIngredients: ['olive oil', 'salt', 'black pepper'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})


meals.push({
    name: 'Salmon',
    diet: 2,
    category: 'protein',
    subcategory: 'fish',
    mainIngredients: ['salmon', 'olive oil'],
    optionalIngredients: ['salt', 'soy sauce', 'black pepper'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Fried shrimps',
    diet: 2,
    category: 'protein',
    subcategory: 'seafood',
    mainIngredients: ['shrimps', 'olive oil'],
    optionalIngredients: ['salt', 'garlic', 'parsley'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Cooked king prawns',
    diet: 2,
    category: 'protein',
    subcategory: 'seafood',
    mainIngredients: ['cooked king prawns'],
    optionalIngredients: ['tartar sauce'],
    isSpecialMeal: true,
    isColdDish: true,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Grilled tunna',
    diet: 2,
    category: 'protein',
    subcategory: 'seafood',
    mainIngredients: ['tunna'],
    optionalIngredients: ['soy sauce'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Grilled chicken breast',
    diet: 3,
    category: 'protein',
    subcategory: 'meat',
    mainIngredients: ['chicken breast'],
    optionalIngredients: ['salt', 'olive oil'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Battered pork loin',
    diet: 3,
    category: 'protein',
    subcategory: 'meat',
    mainIngredients: ['pork loin', 'egg', 'breadcrumbs', 'olive oil'],
    optionalIngredients: ['salt'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Omelette',
    diet: 1,
    category: 'protein',
    subcategory: 'egg',
    mainIngredients: ['egg', 'olive oil'],
    optionalIngredients: ['salt'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Tunna Omelette',
    diet: 2,
    category: 'protein',
    subcategory: 'egg',
    mainIngredients: ['egg', 'tunna', 'olive oil'],
    optionalIngredients: ['salt'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Spanish Omelette',
    diet: 1,
    category: 'protein',
    subcategory: 'egg',
    mainIngredients: ['egg', 'potato', 'onion', 'olive oil'],
    optionalIngredients: ['salt'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Fried egg and potatos',
    diet: 1,
    category: 'protein',
    subcategory: 'egg',
    mainIngredients: ['egg', 'potato', 'olive oil'],
    optionalIngredients: ['salt'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Broken eggs and ham',
    diet: 3,
    category: 'protein',
    subcategory: 'egg',
    mainIngredients: ['egg', 'potato', 'ham', 'olive oil'],
    optionalIngredients: ['salt'],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Butter croissant',
    diet: 1,
    category: 'pastissery',
    subcategory: 'pastry',
    mainIngredients: ['flour', 'olive oil', 'butter', 'egg', 'salt', 'sugar'],
    optionalIngredients: ['honey'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Vegan apple muffin',
    diet: 0,
    category: 'pastissery',
    subcategory: 'pastry',
    mainIngredients: ['buckwheat flour', 'yeast', 'baking soda', 'cinnamon', 'sugar', 'coconut milk', 'banana', 'applesauce'],
    optionalIngredients: ['honey'],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Vegan chocolate cake',
    diet: 0,
    category: 'pastissery',
    subcategory: 'cake',
    mainIngredients: ['almond milk', 'applesauce', 'brewed coffee', 'coconut oil', 'vanilla', 'buckwheat flour', 'baking soda', 'baking powder'],
    optionalIngredients: [],
    isSpecialMeal: true,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Chocolate croissant',
    diet: 1,
    category: 'pastissery',
    subcategory: 'pastry',
    mainIngredients: ['flour', 'olive oil', 'butter', 'egg', 'salt', 'sugar', 'chocolate'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Tiramisu',
    diet: 1,
    category: 'pastissery',
    subcategory: 'cake',
    mainIngredients: ['mascarpone', 'philadelphia', 'coffee', 'egg', 'sugar', 'soletilla biscuits', 'cocoa'],
    optionalIngredients: [],
    isSpecialMeal: true,
    isColdDish: true,
    intolerances: ['lactose', 'gluten'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Carrot cake',
    diet: 1,
    category: 'pastissery',
    subcategory: 'cake',
    mainIngredients: ['carrot', 'flour', 'egg', 'sugar', 'cinnamon'],
    optionalIngredients: ['nuts'],
    isSpecialMeal: true,
    isColdDish: true,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Chocolate brownie',
    diet: 1,
    category: 'pastissery',
    subcategory: 'cake',
    mainIngredients: ['chocolate', 'floar', 'egg', 'sugar'],
    optionalIngredients: [],
    isSpecialMeal: true,
    isColdDish: true,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Greek yoghurt',
    diet: 1,
    category: 'dairy',
    subcategory: 'yoghurt',
    mainIngredients: ['dairy milk', 'yoghurt', 'cream'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Natural yoghurt',
    diet: 1,
    category: 'dairy',
    subcategory: 'yoghurt',
    mainIngredients: ['yoghurt'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Skimmed natural yoghurt',
    diet: 1,
    category: 'dairy',
    subcategory: 'yoghurt',
    mainIngredients: ['skimmed yoghurt'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Soy chocolate yoghurt',
    diet: 0,
    category: 'dairy',
    subcategory: 'yoghurt',
    mainIngredients: ['soy chocolate yoghurt'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: true,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Natural yoghurt and strawberries',
    diet: 1,
    category: 'dairy',
    subcategory: 'yoghurt',
    mainIngredients: ['dairy milk', 'strawberries'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Lemon yoghurt',
    diet: 1,
    category: 'dairy',
    subcategory: 'yoghurt',
    mainIngredients: ['dairy milk', 'lemon'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Strawvberry yoghurt',
    diet: 1,
    category: 'dairy',
    subcategory: 'yoghurt',
    mainIngredients: ['dairy milk', 'strawberry'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: ['lactose'],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Soy and chocolate yoghurt',
    diet: 1,
    category: 'dairy',
    subcategory: 'yoghurt',
    mainIngredients: ['soy milk', 'chocolate'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

meals.push({
    name: 'Almond yoghurt',
    diet: 1,
    category: 'dairy',
    subcategory: 'yoghurt',
    mainIngredients: ['almond milk'],
    optionalIngredients: [],
    isSpecialMeal: false,
    isColdDish: false,
    intolerances: [],
    isLight: false,
    season: ['spring', 'summer', 'autum', 'winter'],
    recipeLink: '',
    imageLink: ''
})

module.exports = meals