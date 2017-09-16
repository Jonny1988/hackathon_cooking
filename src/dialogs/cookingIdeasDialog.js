'use strict';
const Builder = require('botbuilder');
const foodApi = require('../services/foodService');
const { Logger, CookingIdeasDialogMessage } = require('../shared/const');

class cookingIdeasDialog {
    constructor() { Logger.info('Created Instance of cookingDialog'); }
    getName() { return 'cookingDialog'; } // Needs to be unique otherwise an error occurs during registration

    getCookingIdeas(session, args) {
        debugger;
        const recipes = foodApi.getRecipeIdeas();
        // Builder.Prompts.text(session, CookingIdeasDialogMessage.Cooking); // The result of this input will be forwarded to the next step
        // Builder.Message(session).addAttachment({contentType: "image/jpeg", contentUrl: 'http://www.seriouseats.com/recipes/assets_c/2015/07/20150728-homemade-whopper-food-lab-35-thumb-1500xauto-425129.jpg'})
        //     .setText(session, recipes.name+"\n"+recipes.ingredients+"\n"+recipes.description);
        Builder.Prompts.
            .attachment(session,)text(session, recipes.name+"\n")
            .text(session,recipes.ingredients+"\n")
            .text(session,recipes.description);
    }

}

module.exports = new cookingIdeasDialog();