'use strict';
const Builder = require('botbuilder');

const { Logger, HelpDialogMessage } = require('../shared/const');
class HelpDialog {
    constructor() { Logger.info('Created Instance of HelpDialog'); }
    getName() { return 'userHelpDialog'; } // Needs to be unique otherwise an error occurs during registration

    askForHelp(session, args) {
        Builder.Prompts.text(session,HelpDialogMessage.GetHelp);
    }
}

module.exports = new HelpDialog();