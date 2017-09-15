'use strict';
const Builder = require('botbuilder');

const { Logger, startDialogMessages } = require('../shared/const');

class StartDialog {
    constructor() { Logger.info('Created Instance of StartDialog'); }
    getName() { return 'UserInputDialog'; } // Needs to be unique otherwise an error occurs during registration

    askUserForName(session, args) {
        //TODO: Session contain context information based on the channel and the user

        Builder.Prompts.choice(session, startDialogMessages.AskForOption, "options|option|option" , {listStyle: 3}); // The result of this input will be forwarded to the next step
    }

    greetUser(session, result) {
        session.send(startDialogMessages.PersonalGreeting.replace('%s', result.response)).endDialog();
    }
}

module.exports = new StartDialog();