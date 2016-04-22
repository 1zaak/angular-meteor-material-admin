import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
 
import './productDetails.html';
 
class ProductDetails {
  constructor($stateParams) {
    'ngInject';
    
    this.productId = $stateParams.productId;
    this.name = $stateParams.productName;
  }
}
 
const name = 'productDetails';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: ProductDetails
})
  .config(config);
 
function config($stateProvider) {
  'ngInject';
 
  $stateProvider.state('productDetails', {
    url: '/products/:productId/:productName',
    template: '<product-details></product-details>'
  });
}