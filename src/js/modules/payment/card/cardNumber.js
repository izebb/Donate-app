import {
    formatCardNumber, validateCardNumber } from 'stripe.js';

export function cardNumberFormatter() {
    'use strict';
    let cardFormatter = function(e) {
        const elm = angular.element(e.currentTarget);
        let digit, val = elm.val();
        digit = String.fromCharCode(e.which);
        if (!/^\d+$/.test(digit)) { return; }
        elm.val(formatCardNumber(val) )
    };

    return {
        link(scope, element) {
            element.bind('keypress', cardFormatter);
        }
    };
}



export function cardNumberValidator() {
    return {
        require: '^ngModel',
        link(scope, elm, attrs, ngModelCtrl) {
            function validate(value) {
                let valid = value ? validateCardNumber(value) : false;
                ngModelCtrl.$setValidity('cardNumber', valid);
                return valid;
            }

            ngModelCtrl.$parsers.unshift(function(value) {
                return validateCardNumber(value) ?formatCardNumber(value) : undefined;
            });

            ngModelCtrl.$formatters.unshift(function(value) {
                validateCardNumber(value);
            });
        }
    };
}

export function cardNumber() {
    return {
        templateUrl: "payment/card/templates/card-number.html",
        scope: {
            value: "=",
            id: "@",
            label: "@",

        }
    }
}



