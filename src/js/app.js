'use strict';
import angular from 'angular';
import ngStorage from 'ngstorage';
import mainController from './modules/controllers/mainController';
import appView from './modules/directives/appView';
import templates from './templateCache/templates';

angular.module('DonateApp', ['ngStorage','templates'])
    .controller('mainController', mainController)
    .directive('appView', appView);