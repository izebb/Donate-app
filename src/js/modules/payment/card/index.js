'use strict';
import angular from 'angular';
import {numericOnly} from './cardUtils';
import {cardCvvFormatter, cvvValidator, cardCvv} from './cvv';
import {expiryValidator, cardExpiry, cardExpiryFormatter} from './expiry';
import {cardNumber, cardNumberValidator, cardNumberFormatter} from './cardNumber';
import {cardBrand} from './cardBrand';

angular.module('cards.utils', [])
    .directive('numericOnly', [numericOnly])

angular.module('cards.cvv', ['cards.utils'])
    .directive('cvvValidator', [cvvValidator])
    .directive('cardCvvFormatter', [cardCvvFormatter])
    .directive('cardCvv', [cardCvv]);

angular.module('cards.cardType', ['cards.utils'])
    .directive('cardBrand', [cardBrand]);


angular.module('cards.expiry', ['cards.utils'])
    .directive('expiryValidator', [expiryValidator])
    .directive('cardExpiryFormatter', [cardExpiryFormatter])
    .directive('cardExpiry', [cardExpiry]);

angular.module('cards.cardNumber', ['cards.utils'])
    .directive('cardNumber', [cardNumber])
    .directive('cardNumberValidator', [cardNumberValidator])
    .directive('cardNumberFormatter', [cardNumberFormatter]);


angular.module('Donate.cards', ['cards.expiry', 'cards.cvv', 'cards.cardNumber', 'cards.cardType']);
