import {
    validateCVC } from 'stripe.js';

export function cardCvvFormatter() {
    'use strict';
    let restrictCvc = function(e) {
        const elm = angular.element(e.currentTarget);
        let digit, val;
        digit = String.fromCharCode(e.which);
        if (!/^\d+$/.test(digit)) { return; }

        val = elm.val() + digit;
        if (val.length > 4) { e.preventDefault(); }
    };

    return {
        link(scope, element) {
            element.bind('keypress', restrictCvc);
        }
    };
}



export function cvvValidator() {
    return {
        require: '^ngModel',
        link(scope, elm, attrs, ngModelCtrl) {
            function validate(value) {
                let valid = value ? validateCVC(value) : false;
                ngModelCtrl.$setValidity('cardCvc', valid);
                return valid;
            }

            ngModelCtrl.$parsers.unshift(function(value) {
                return validate(value) ? value : undefined;
            });

            ngModelCtrl.$formatters.unshift(function(value) {
                validate(value);
            });
        }
    };
}

export function cardCvv() {
    return {
        templateUrl: "payment/card/templates/cvv.html",
        scope: {
            value: "=",
            id: "@",
            label: "@",
            

        }
    }
}



