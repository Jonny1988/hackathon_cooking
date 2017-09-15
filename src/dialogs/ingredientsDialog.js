'use strict';
const Builder = require('botbuilder');

const { Logger, IngredientsDialogMessage } = require('../shared/const');

class IngredientsDialog {
    constructor() { Logger.info('Created Instance of IngredientsDialog'); }
    getName() { return 'ingredientsDialog'; } // Needs to be unique otherwise an error occurs during registration

    getRecipeForIngredients(session, args) {
        Builder.Prompts.text(session, IngredientsDialogMessage.Ingredients); // The result of this input will be forwarded to the next step
    }

}

module.exports = new IngredientsDialog();