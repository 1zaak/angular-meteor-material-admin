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
    Navigation,
    'accounts.ui'
]).component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: EcogivAdmin
})
  .config(config)
  .run(run);
 
function config($locationProvider, $urlRouterProvider, $mdIconProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/products');

  const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';
 
  $mdIconProvider
    .iconSet('social',
      iconPath + 'svg-sprite-social.svg')
    .iconSet('action',
      iconPath + 'svg-sprite-action.svg')
    .iconSet('communication',
      iconPath + 'svg-sprite-communication.svg')
    .iconSet('content',
      iconPath + 'svg-sprite-content.svg')
    .iconSet('toggle',
      iconPath + 'svg-sprite-toggle.svg')
    .iconSet('navigation',
      iconPath + 'svg-sprite-navigation.svg')
    .iconSet('image',
      iconPath + 'svg-sprite-image.svg');
}

function run($rootScope, $state) {
  'ngInject';
  
  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        console.log("No entry");
        $state.go('products');
      }
    }
  );
}
