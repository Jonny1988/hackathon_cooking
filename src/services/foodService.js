'use strict';
const fs = require("fs");
const recipes = fs.readFileSync(__dirname+"/recipes.json");
//iterates over all receipes and searches for matching ingredients, if all ingriends which were provided are found in
// in the ingredient list of the receipe, we will add this to the found receipes list ;

const getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const getRecipesFromIngredients = (ingredients, callback) => {
    const returnRecipes = [];
    for (let i=0; i < ingredients.length; i++) {
        returnRecipes.add(recipes.find(function (recipe) {
            recipe.ingredients.includes(ingredients[i]);
        }));
    }
    return returnRecipes;
};

const getRecipesBasedOnType = (type, callback) => {
    return recipes.find(function (recipe) {
        recipe.name.includes(type);
    });
};

const getRecipeIdeas = (args, callback) => {
    return recipes[getRandomIntInclusive(1,100)];
};

module.exports = {
    getRecipesFromIngredients,
    getRecipesBasedOnType,
    getRecipeIdeas
};