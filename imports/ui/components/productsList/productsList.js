import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from 'angular-ui-router';
import './productsList.html';
import { Products } from '../../../api/products.js';
import { name as ProductAdd } from '../productAdd/productAdd';
import { name as ProductRemove } from '../productRemove/productRemove';

class ProductsList {
  constructor($scope, $reactive) {
    'ngInject'

    $reactive(this).attach($scope);

    this.helpers({
      products() {
        return Products.find({});
      }
    })
  }
}

const name = 'productsList';

//create a module
export default angular.module('productsList', [
  angularMeteor,
  ProductAdd,
  ProductRemove
])
  .component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: ProductsList
  })
  .config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('products', {
      url: '/products',
      template: '<products-list></products-list>'
    });
}
