'use strict';
const Builder = require('botbuilder');
const foodApi = require('../services/foodService');

const { Logger, IngredientsDialogMessage } = require('../shared/const');

class IngredientsDialog {
    constructor() { Logger.info('Created Instance of IngredientsDialog'); }
    getName() { return 'ingredientsDialog'; } // Needs to be unique otherwise an error occurs during registration

    getRecipeForIngredients(session, args) {
        const ingredients = args.intent.entities; //[0].entity; ist zb "tomatoe";
        const ingredientName = [];
        for(var index in ingredients){
            ingredientName.push(ingredients[index].entity);
        }
        const reci = foodApi.getRecipesFromIngredients(ingredientName);
        var recipies = reci.slice(0,5);
        var recipeName = [];
        for( var rec in recipies){
            recipeName.push(new Builder.HeroCard(session)
                .title(((recipies[rec].name==undefined?'' :recipies[rec].name ))));
        }
        Builder.Prompts.text(session, IngredientsDialogMessage.Ingredients.
        replace('%s',ingredientName.toString())); // The result of this input will be forwarded to the next step

        var msg = new Builder.Message(session);
        msg.attachmentLayout(Builder.AttachmentLayout.list)
        msg.attachments(recipeName);
        session.send(msg).endDialog();
    }

}

module.exports = new IngredientsDialog();