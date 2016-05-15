import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import { name as EcogivAdmin } from "../imports/ui/components/ecogivAdmin/ecogivAdmin";

angular.module('ecogiv-admin', [
  angularMeteor,
  EcogivAdmin,
  uiRouter,
    ngMaterial
]).config(config)
  

  function config($locationProvider, $urlRouterProvider, paginationTemplateProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/products');

  const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';
 

     
}