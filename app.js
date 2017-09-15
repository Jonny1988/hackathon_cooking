'use strict';
const Restify = require('restify');
const {Logger} = require('./src/shared/const');
const {Builder} = require('./src/bot');
const foodService = require('./src/services/foodService');

//-- Setup Configuration --//
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3978;

foodService.getReceipesFromIngridients(['ing1', 'ing3',], (err, result) => {
    //
    Logger.info(result);
});

//-- Setup Restify Server --//
let server = Restify.createServer();
server.listen(PORT, HOST, () => {
    Logger.info('%s listening to %s', server.name, server.url)
});

//-- Setup Bot --//
let builder = new Builder();
let bot = builder.withConnector(server).withRecognizer().build();

