'use strict';
const recipes = require('./recipes.js');

const getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const getRecipesFromIngredients = (ingredients, callback) => {
    const returnRecipes = [];
    for (let i=0; i < ingredients.length; i++) {
        returnRecipes.add(recipes.getRecipes().find(function (recipe) {
            recipe.ingredients.includes(ingredients[i]);
        }));
    }
    return returnRecipes;
};

const getRecipesBasedOnType = (type, callback) => {
    return recipes.getRecipes().get.find(function (recipe) {
        recipe.name.includes(type);
    });
};

const getRecipeIdeas = (args, callback) => {
    debugger;
    return recipes.getRecipes()[getRandomIntInclusive(1,100)];
};

module.exports = {
    getRecipesFromIngredients,
    getRecipesBasedOnType,
    getRecipeIdeas
};