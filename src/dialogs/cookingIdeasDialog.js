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
        var card = new Builder.ThumbnailCard(session)
            .title(recipes.name)
            .subtitle(recipes.ingredients)
            .text(recipes.description)
            .images([
                Builder.CardImage.create(session, 'http://i6.glitter-graphics.org/pub/1380/1380026gs8q17xwt3.gif')
            ])
            .buttons([
                Builder.CardAction.openUrl(session,recipes.url, 'see whole recipe')
            ]);
        // attach the card to the reply message
        var msg = new Builder.Message(session).addAttachment(card);
        session.send(msg);
    }

}

module.exports = new cookingIdeasDialog();