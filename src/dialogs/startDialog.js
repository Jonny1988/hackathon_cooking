'use strict';
const Builder = require('botbuilder');

const Logger = require('../shared/const').Logger;
const Messages = require('../shared/const').Messages;

class startDialog {
    constructor() { Logger.info('Created Instance of startDialog'); }
    getName() { return 'UserInputDialog'; } // Needs to be unique otherwise an error occurs during registration

    askUserForName(session, args) {
        //TODO: Session contain context information based on the channel and the user

        Builder.Prompts.text(session, Messages.AskForName); // The result of this input will be forwarded to the next step
    }

    greetUser(session, result) {
        session.send(Messages.PersonalGreeting.replace('%s', result.response)).endDialog();
    }
}

module.exports = new startDialog();