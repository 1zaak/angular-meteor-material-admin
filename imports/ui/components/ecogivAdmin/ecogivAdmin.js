import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import "./ecogivAdmin.html";
import { name as ProductsList } from '../productsList/productsList.js';
import { name as Navigation } from '../navigation/navigation.js';
import { name as ProductDetails } from '../productDetails/productDetails';


class EcogivAdmin {}

const name = 'ecogivAdmin';

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMaterial,
    ProductsList,
    ProductDetails,
    Navigation
]).component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: EcogivAdmin
})
  .config(config);
 
function config($locationProvider, $urlRouterProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/products');
}
