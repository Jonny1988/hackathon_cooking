'use strict';
const Builder = require('botbuilder');
const foodApi = require('../services/foodService');
const { Logger, CookingIdeasDialogMessage } = require('../shared/const');

class cookingIdeasDialog {
    constructor() { Logger.info('Created Instance of cookingDialog'); }
    getName() { return 'cookingDialog'; } // Needs to be unique otherwise an error occurs during registration

    getCookingIdeas(session, args) {
        debugger;
        const reciepes = foodApi.getRecipeIdeas();
        Builder.Prompts.text(session, CookingIdeasDialogMessage.Cooking); // The result of this input will be forwarded to the next step
    }

}

module.exports = new cookingIdeasDialog();