'use strict';

const Telegram = require('telegram-node-bot');

class BotController extends Telegram.TelegramBaseController {
    /**
     * @param {Scope} $
     */
    icoHandler($) {
        $.sendMessage('Start Date : 11 July 2018\nEnd Date : 10 August 2018\n ')
    }

    preIcoHandler($) {
        $.sendMessage('Start Date : 21 June 2018\nEnd Date : 10 July 2018\n ')
    }

    startDateHandler($) {
        $.sendMessage('ICO : 11 July 2018\nPre ICO : 21 June 2018\n ')
    }

    endDateHandler($) {
        $.sendMessage('ICO : 10 July 2018\nPre ICO : 10 August 2018\n')
    }

    tokenSupplyHandler($) {
        $.sendMessage('Total Token Supply : 1,000,000,000')
    }

    tokenSaleHandler($) {
        $.sendMessage('Tokens for Sale : 500,000,000')
    }

    tokenPriceHandler($) {
        $.sendMessage('Token Price : $0.10')
    }

    supportHandler($) {
        $.sendMessage('hello@zagg.network')
    }

    tokenSymbolHandler($) {
        $.sendMessage('Token Symbol: ZAGG')
    }

    acceptedCurrenciesHandler($) {
        $.sendMessage('Accepted Currencies : ETH, BTC, BNB')
    }

    helpHandler($) {
        $.sendMessage('List of all Commands\n/ico\n/preIco\n/startDate\n/endDate\n/tokenSupply\n/tokenSale\n/tokenPrice\n/support\n/tokenSymbol\n/acceptedCurrencies')
    }

    pingHandler($) {
        console.log("called");
        $.sendMessage('List of all Commands\n/ico\n/preIco\n/startDate\n/endDate\n/tokenSupply\n/tokenSale\n/tokenPrice\n/support\n/tokenSymbol\n/acceptedCurrencies')

    }

    whitePaperCommandHandler($){
        $.sendMessage('https://zagg.network/#')

    }

    get routes() {
        return this._commandList()
    }

    _commandList() {
        return {
            'icoCommand': 'icoHandler',
            'preIcoCommand': 'preIcoHandler',
            'startDateCommand': 'startDateHandler',
            'endDateCommand': 'endDateHandler',
            'tokenSupplyCommand': 'tokenSupplyHandler',
            'tokenSaleCommand': 'tokenSaleHandler',
            'tokenPriceCommand': 'tokenPriceHandler',
            'supportCommand': 'supportHandler',
            'helpCommand': 'helpHandler',
            'tokenSymbolCommand': 'tokenSymbolHandler',
            'acceptedCurrenciesCommand': 'acceptedCurrenciesHandler',
            'pingCommand': 'pingHandler',
            'whitePaperCommand':'whitePaperCommandHandler'
        }
    }
}

module.exports = BotController;