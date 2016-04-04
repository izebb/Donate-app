'use strict';
import angular from 'angular';
import ngStorage from 'ngstorage';
import mainController from './modules/controllers/mainController';
import templates from './templateCache/templates';
import appView from './modules/directives/appView';
import payForm from './modules/directives/payForm';

angular.module('DonateApp', ['ngStorage','templates'])
    .controller('mainController', mainController)
    .directive('appView', appView)
    .directive('payForm', payForm);