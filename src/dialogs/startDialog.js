'use strict';
const Builder = require('botbuilder');

const { Logger, StartDialogMessages } = require('../shared/const');

class StartDialog {
    constructor() { Logger.info('Created Instance of IngredientsDialog'); }
    getName() { return 'UserInputDialog'; } // Needs to be unique otherwise an error occurs during registration

    askForUserChoice(session, args) {
        Builder.Prompts.text(session, StartDialogMessages.AskForOption); // The result of this input will be forwarded to the next step
    }

}

module.exports = new StartDialog();