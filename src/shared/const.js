'use strict';
const Winston = require('winston');
const tsFormat = () => (new Date()).toLocaleTimeString();
const Logger = new Winston.Logger({
    exitOnError: false,
    transports: [
        new Winston.transports.Console({ colorize: true, timestamp: tsFormat, level: 'debug' }),
        new Winston.transports.File({
            name: 'info-file',
            filename: 'info.log',
            level: 'info'
        }),
        new Winston.transports.File({
            name: 'error-file',
            filename: 'error.log',
            level: 'error'
        }),
    ]
});

Logger.handleExceptions(new Winston.transports.File({
    filename: 'exception.log',
    handleExceptions: true,
    humanReadableUnhandledException: true
}));

// Responses send by your bot
const StartDialogMessages = {
    Greeting: 'Hello I´am your Bot, please type help for more information!',
    AskForOption: "Hello, ask me anything about getCookingIdeas!",
};

const HelpDialogMessage = {
    GetHelp : "help"
};
const RecipeDialogMessage = {
    Recipe : "recipe"
};
const IngredientsDialogMessage = {
    Ingredients : "Here are you recipes that contains "
};
const CookingIdeasDialogMessage = {
    Cooking : "getCookingIdeas"
};

// TODO: Extend the Intents based on LUIS if you use it
const Intents = {
    SAMPLE: 'String.You.Insert.As.Intent.On.Luis'
}

module.exports = {
    Logger: Logger,
    StartDialogMessages: StartDialogMessages,
    RecipeDialogMessage: RecipeDialogMessage,
    IngredientsDialogMessage: IngredientsDialogMessage,
    HelpDialogMessage: HelpDialogMessage,
    CookingIdeasDialogMessage: CookingIdeasDialogMessage,
    Endpoint: '/api/messages',
    Intents: Intents
}