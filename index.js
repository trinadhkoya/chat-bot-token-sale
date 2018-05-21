'use strict'
// require('dotenv').config()
const Telegram = require('telegram-node-bot');
const tg = new Telegram.Telegram('610537835:AAFiirsavhwbNbJD9O5qChr0pl7607UUWOE');
const BotController = require('./controllers/bot');
const botCtrl = new BotController();

tg.router
    .when(new Telegram.TextCommand('/start', 'pingCommand'), botCtrl)
    .when(new Telegram.TextCommand('/ico', 'icoCommand'), botCtrl)
    .when(new Telegram.TextCommand('/whitePaper', 'whitePaperCommand'), botCtrl)
    .when(new Telegram.TextCommand('/preIco', 'preIcoCommand'), botCtrl)
    .when(new Telegram.TextCommand('/startDate', 'startDateCommand'), botCtrl)
    .when(new Telegram.TextCommand('/endDate', 'endDateCommand'), botCtrl)
    .when(new Telegram.TextCommand('/tokenSupply', 'tokenSupplyCommand'), botCtrl)
    .when(new Telegram.TextCommand('/tokenSale', 'tokenSaleCommand'), botCtrl)
    .when(new Telegram.TextCommand('/tokenPrice', 'tokenPriceCommand'), botCtrl)
    .when(new Telegram.TextCommand('/support', 'supportCommand'), botCtrl)
    .when(new Telegram.TextCommand('/help', 'helpCommand'), botCtrl)
    .when(new Telegram.TextCommand('/tokenSymbol', 'tokenSymbolCommand'), botCtrl)
    .when(new Telegram.TextCommand('/acceptedCurrencies', 'acceptedCurrenciesCommand'), botCtrl);



