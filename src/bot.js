'use strict';
const Builder = require('botbuilder');
const { Logger, StartDialogMessages, Endpoint, Intents } = require('./shared/const');
//const JsonStorage = require('./data/BotJsonStore');

const StartDialog = require('./dialogs/startDialog');
const RecipeDialog = require('./dialogs/recipeDialog');
const IngredientsDialog = require('./dialogs/ingredientsDialog');
const CookingIdeasDialog = require('./dialogs/cookingIdeasDialog');
const HelpDialog = require('./dialogs/helpDialog');



class YourBotBuilder {
    constructor() {
        this.appId = process.env.APP_ID || ''; // Can be emtpy, but remember to insert them in the emulator also
        this.appPw = process.env.APP_PW || ''; // Can be emtpy, but remember to insert them in the emulator also
        this.luis = process.env.LUIS_URL || Intents.URL;
        this.connector = null;
        this.recognizer = [];
    }

    withConnector(server, appId, appPw) {
        this.appId = this.appId || appId;
        this.appPw = this.appPw || appPw;
        this.connector = new Builder.ChatConnector({ appId: this.appId, appPassword: this.appPw });
        server.post(Endpoint, this.connector.listen()); // Server will reeive messages on this endpoint
        return this;
    }

    withRecognizer(recognizer) {
        if (recognizer) {
            this.recognizer.push(recognizer); //TODO: For an own Recognizer look @ https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-recognize-intent-messages
        } else {
            //Default Recognizer is Luis
            this.recognizer.push(new Builder.LuisRecognizer(this.luis));
        }
        return this;
    }

    build() {
        let bot = new YourBot(this.connector, this.recognizer);
        this.recognizer.forEach(recognizer => { bot.core.recognizer(recognizer); }); //TODO: Pay attention so you dont add multiple Luis Recognizer
        return bot;
    }
}


class YourBot {
    constructor(connector, recognizer) {
        this.core = new Builder.UniversalBot(connector, (session, args) => {
            //TODO: Default Handler that will be called if no dialog or other handler triggers
            session.send(StartDialogMessages.Greeting);
        });

        //this.core.set('storage', new JsonStorage()); //TODO: Remove this line to use memory storage (State will be lost after shutdown)
        this.init();
    }


    init() {
        //TODO: Add your dialogs to the bot
        this.core.dialog(StartDialog.getName(), [StartDialog.askForUserChoice])
            .triggerAction({ matches: Intents.START })
            .cancelAction('CancelPlaceAdding', 'Okay', { matches: /^(cancel|nevermind|abort)/i });
        this.core.dialog(IngredientsDialog.getName(), [IngredientsDialog.getRecipeForIngredients])
            .triggerAction({ matches: Intents.INGREDIENTS })
            .cancelAction('CancelPlaceAdding', 'Okay', { matches: /^(cancel|nevermind|abort)/i });
        this.core.dialog(RecipeDialog.getName(), [RecipeDialog.getRecipes])
            .triggerAction({ matches: Intents.MEALTYPE })
            .cancelAction('CancelPlaceAdding', 'Okay', { matches: /^(cancel|nevermind|abort)/i });
        this.core.dialog(HelpDialog.getName(), [HelpDialog.askForHelp])
            .triggerAction({ matches: Intents.HELP })
            .cancelAction('CancelPlaceAdding', 'Okay', { matches: /^(cancel|nevermind|abort)/i });
        this.core.dialog(CookingIdeasDialog.getName(), [CookingIdeasDialog.getCookingIdeas])
            .triggerAction({ matches: Intents.IDEAS })
            .cancelAction('CancelPlaceAdding', 'Okay', { matches: /^(cancel|nevermind|abort)/i });
    }
}

module.exports = {
    Builder: YourBotBuilder
};