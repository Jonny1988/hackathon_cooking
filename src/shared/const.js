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
const startDialogMessages = {
    Greeting: 'Hello I´am your Bot, please extend my features!',
    AskForOption : "What do you want to do?",
    AskForName: 'What is your name?',
    PersonalGreeting: 'Hello %s!'
};

// TODO: Extend the Intents based on LUIS if you use it
const Intents = {
    INGREDIENTS: 'search.after.ingredients',
    MEALTYPE: 'search.after.type',
    IDEAS: 'search.for.cooking.ideas',
    URL: 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/1f914478-c907-4a55-8ac8-7d153107d61a?subscription-key=067d416c6f0247b4a886ea70668860a5&staging=true&verbose=true&timezoneOffset=0&q='
};

module.exports = {
    Logger: Logger,
    startDialogMessages: startDialogMessages,
    Endpoint: '/api/messages',
    Intents: Intents
};