'use strict';
const Builder = require('botbuilder');
const foodApi = require('../services/foodService');

const { Logger, IngredientsDialogMessage } = require('../shared/const');

class IngredientsDialog {
    constructor() { Logger.info('Created Instance of IngredientsDialog'); }
    getName() { return 'ingredientsDialog'; } // Needs to be unique otherwise an error occurs during registration

    getRecipeForIngredients(session, args) {
        debugger;
        const ingredients = args.intent.entities; //[0].entity; ist zb "tomatoe";
        const ingredientName = [];
        ingredients.each(function (ingredient) {
            ingredientName.push(ingredient.entitiy);
        });
        const recipies = foodApi.getRecipesFromIngredients(ingredientName);
        Builder.Prompts.text(session, IngredientsDialogMessage.Ingredients); // The result of this input will be forwarded to the next step
    }

}

module.exports = new IngredientsDialog();