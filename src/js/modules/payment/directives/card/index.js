'use strict';
import angular from 'angular';
import paymentView from './directives/paymentView';
import payForm from './directives/payForm';
import paymentFactory from './services/payment';

angular.module('Payment.Cards', []);
    .directive('cardUtiis' [])
    
angular.module('DonateApp.payment', [])
    .factory('payment',['$http', paymentFactory] )
    .directive('paymentView', [paymentView])
    .directive('payForm', [payForm]);
    
cardcvvFormatter
cvvValidator
restrictNumeric