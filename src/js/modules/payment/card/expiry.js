import {
    formatExpiry,
    validateExpiry } from 'stripe.js';


export function expiryValidator() {
    return {
        require: '^ngModel',
        link(scope, elm, attrs, ngModelCtrl) {
            function validate(value) {
                let valid = value ? validateExpiry(value) : false;
                ngModelCtrl.$setValidity('validateExpiry', valid);
                return valid;
            }

            ngModelCtrl.$parsers.unshift(function(value) {
                return validate(value) ? formatExpiry(value) : undefined;
            });

            ngModelCtrl.$formatters.unshift(function(value) {
                validateExpiry(value);
            });
        }
    };
}

export function cardExpiryFormatter() {
    'use strict';
    let expiryFormatter = function(e) {
        const elm = angular.element(e.currentTarget);
        let digit, val = elm.val();
        digit = String.fromCharCode(e.which);
        if (!/^\d+$/.test(digit)) { return; }
        elm.val(formatExpiry(val) )
    };

    return {
        link(scope, element) {
            element.bind('keypress', expiryFormatter);
        }
    };
}


export function cardExpiry() {
    return {
        templateUrl: "payment/card/templates/expiry.html",
        scope: {
            value: "=",
            id: "@",
            label: "@"

        }
    }
}



