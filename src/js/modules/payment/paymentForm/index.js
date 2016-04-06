'use strict';
import angular from 'angular';
import card from '../card';
import paymentFactory from './services/payment';
import payForm from './payForm';
import paymentView from './paymentView';


angular.module('DonateApp.paymentForm', ['Donate.cards'])
    .factory('payment',['$http', paymentFactory] )
    .directive('paymentView', [paymentView])
    .directive('payForm', [payForm]);
