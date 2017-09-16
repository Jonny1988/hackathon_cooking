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
        meals.forEach(function (meal) {
            mealName.push(meal.entitiy);
        });
        const recipies = foodApi.getRecipesFromIngredients(mealName);
        var card = new Builder.ThumbnailCard(session)
            .title(recipies[0].name)
            .subtitle(recipies[0].ingredients)
            .text(recipies[0].description)
            .images([
                Builder.CardImage.create(session, 'https://i.pinimg.com/originals/e9/ac/62/e9ac624779305034569b6cfe4002679a.jpg')
            ])
            .buttons([
                Builder.CardAction.openUrl(session,recipies[0].url, 'see whole recipe')
            ]);
        // attach the card to the reply message
        var msg = new Builder.Message(session).addAttachment(card);
        session.send(msg);
    }

}

module.exports = new RecipeDialog();