'use strict';
import angular from 'angular';
import card from '../card';
import paymentFactory from './services/payment';
import payForm from './payForm';
import paymentView from './paymentView';
import paymentMessage from './paymentMessage';


angular.module('DonateApp.paymentForm', ['Donate.cards'])
    .factory('payment',['$http', '$httpParamSerializer', '$localStorage', paymentFactory] )
    .directive('paymentView', ['$timeout',paymentView])
    .directive('payForm', [ payForm])
    .directive('paymentMessage', [paymentMessage]);
