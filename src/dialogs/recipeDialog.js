'use strict';
const Builder = require('botbuilder');
const foodApi = require('../services/foodService');
const { Logger, RecipeDialogMessage } = require('../shared/const');

class RecipeDialog {
    constructor() { Logger.info('Created Instance of recipesDialog'); }
    getName() { return 'recipesDialog'; } // Needs to be unique otherwise an error occurs during registration

    getRecipes(session, args) {
        debugger;
        const meals = args.intent.entities; //[0].entity; ist zb "tomatoe";
        const mealName = [];
        meals.each(function (meal, index, array) {
            mealName.add(meal[index].entitiy);
        });
        const recipies = foodApi.getRecipesFromIngredients(mealName);
        Builder.Prompts.text(session, RecipeDialogMessage.Recipe); // The result of this input will be forwarded to the next step
    }

}

module.exports = new RecipeDialog();