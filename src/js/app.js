'use strict';
import angular from 'angular';
import ngStorage from 'ngstorage';
import templates from './modules/templateCache/templates';
import Payment from './modules/payment';

angular.module('DonateApp', ['ngStorage','templates', 'DonateApp.payment']);