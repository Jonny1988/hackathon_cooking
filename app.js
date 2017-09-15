'use strict';
const Restify = require('restify');
const Logger = require('./src/shared/const').Logger;
const Builder = require('./src/bot').Builder;

//-- Setup Configuration --//
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3978;

//-- Setup Restify Server --//
var server = Restify.createServer();
server.listen(PORT, HOST, () => {
    Logger.info('%s listening to %s', server.name, server.url)
})

//-- Setup Bot --//
var builder = new Builder();
var bot = builder.withConnector(server).withRecognizer().build();