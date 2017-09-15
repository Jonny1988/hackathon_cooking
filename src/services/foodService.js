/**
 * Created by akirilyuk on 9/15/17.
 */
'use strict';

const receipe1 = {
    type: 'vegetarian',
    name: 'some name',
    ingredients: ['tomaten amount1', 'kartoffeln amount2', 'zwiebeln amount3', 'ing4 amount4', 'ing28 amount5', 'ing99 amount6', 'ing1 amount7'],
    steps: ['step 1, step 2, step 3, step 4, step 5, step 6, step 7'],
    timeConsumed: 360,
    difficulty: 0,
};

const receipe2 = {
    type: 'spaghetti',
    name: 'dunno party',
    ingredients: ['ing2 amount1', 'ing1 amount2', 'ing3 amount3', 'ing4 amount4', 'ing5 amount5', 'ing6 amount6', 'ing7 amount7'],
    steps: ['step 1, step 2, step 3, step 4, step 5, step 6, step 7'],
    timeConsumed: 360,
    difficulty: 0,
};

const receipe3 = {
    type: 'pizza',
    name: 'pizza fancy',
    ingredients: ['salami amount6', 'flour amount7', 'pork amount7', 'tomatos amount9'],
    steps: ['step 1, step 2, step 3, step 4, step 5, step 6, step 7'],
    timeConsumed: 360,
    difficulty: 0,
};

const receipe4 = {
    type: 'vegetarian',
    name: 'some name',
    ingredients: ['ing4 amount1', 'ing7 amount2', 'ing9 amount5', 'ing3 amount6', 'ing1 amount7'],
    steps: ['step 1, step 2, step 3, step 4, step 5, step 6, step 7'],
    timeConsumed: 360,
    difficulty: 0,
};

const receipe5 = {
    type: 'salat',
    name: 'ceasar salad',
    ingredients: ['tomatos amount2', 'salat amount3', 'ing8 amount4', 'ing8 amount5', 'ing9 amount7'],
    steps: ['step 1, step 2, step 3, step 4, step 5, step 6, step 7'],
    timeConsumed: 360,
    difficulty: 0,
};

const receipe6 = {
    type: 'meat',
    name: 'some name',
    ingredients: ['ing4 amount1', 'ing5 amount2',  'ing1 amount4', 'ing2 amount5', 'ing3 amount6',],
    steps: ['step 1, step 2, step 3, step 4, step 5, step 6, step 7'],
    timeConsumed: 360,
    difficulty: 0,
};

const receipes = [receipe1, receipe2, receipe3, receipe4, receipe5, receipe6];


//iterates over all receipes and searches for matching ingredients, if all ingriends which were provided are found in
// in the ingredient list of the receipe, we will add this to the found receipes list ;
const getReceipesFromIngridients = (ingridients, callback) => {
    const foundReceipes = [];
    receipes.forEach(oneReceipe => {
        let matchedIngredients = 0;
        ingridients.forEach(ingredientToFind=>{
            oneReceipe.ingredients.forEach(ingredient => {
                if (ingredient.includes(ingredientToFind)) {
                    matchedIngredients++;
                }
            })
        });
        if(matchedIngredients === ingridients.length){
            foundReceipes.push(oneReceipe);
        }
    });
    return callback(err, foundReceipes);
};

const getReceipesBasedOnType = (type, callback) => {

};

module.exports = {
    getReceipesFromIngridients
};