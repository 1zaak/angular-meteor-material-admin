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
 
function config($locationProvider, $urlRouterProvider, $mdIconProvider, $mdThemingProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/products');

  const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';
 

  $mdThemingProvider.theme('default')
    .primaryPalette('amber', {
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('pink', {
      'default': '400' // use shade 200 for default, and keep all other shades the same
    });

  $mdIconProvider
    .iconSet('social',
      iconPath + 'svg-sprite-social.svg')
    .iconSet('action',
      iconPath + 'svg-sprite-action.svg')
      .iconSet('content',
      iconPath + 'svg-sprite-content.svg')
      .iconSet('navigation',
      iconPath + 'svg-sprite-navigation.svg')
    
}

function run($rootScope, $state, $mdToast) {
  'ngInject';
  
  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $mdToast.show($mdToast.simple().textContent('No Entry!'));
        $state.go('products');
      }
    }
  );
}
