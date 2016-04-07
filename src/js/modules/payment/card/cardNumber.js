import {
    formatCardNumber, validateCardNumber } from 'stripe.js';

export function cardNumberFormatter() {
    'use strict';
    let cardFormatter = function(e) {
        const elm = angular.element(e.currentTarget);
        let digit, val = elm.val();
        elm.val(formatCardNumber(val));
    };

    return {
        link(scope, element) {
            element.bind('keypress', cardFormatter);
            element.bind('paste', cardFormatter);
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
                return validate(value) ? formatCardNumber(value) : undefined;
            });

            ngModelCtrl.$formatters.unshift(function(value) {
                validate(value);
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
        
    };
}



