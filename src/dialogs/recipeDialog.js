'use strict';
const Builder = require('botbuilder');

const { Logger, RecipeDialogMessage } = require('../shared/const');

class IngredientsDialog {
    constructor() { Logger.info('Created Instance of IngredientsDialog'); }
    getName() { return 'recipesDialog'; } // Needs to be unique otherwise an error occurs during registration

    getRecipes(session, args) {
        Builder.Prompts.text(session, RecipeDialogMessage.Recipe); // The result of this input will be forwarded to the next step
    }

}

module.exports = new IngredientsDialog();