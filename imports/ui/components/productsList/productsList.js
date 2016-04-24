import angular from "angular";
import angularMeteor from "angular-meteor";
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import './productsList.html';
import { Products } from '../../../api/products/index';
import { name as ProductAdd } from '../productAdd/productAdd';
import { name as ProductRemove } from '../productRemove/productRemove';
import { name as ProductsSort } from '../productsSort/productsSort';


class ProductsList {
  constructor($scope, $reactive) {
    'ngInject'

    $reactive(this).attach($scope);

    this.perPage = 3;
    this.page = 1;
    this.sort = {
      name: 1
    };

    this.searchText = '';

    this.subscribe('products', () => [{
      limit: parseInt(this.perPage),
      skip: parseInt((this.getReactively('page') - 1) * this.perPage),
      sort: this.getReactively('sort')
    }, this.getReactively('searchText')
    ]);

    this.helpers({
      products() {
        return Products.find({}, {
          sort: this.getReactively('sort')
        });
      },
      productsCount() {
        return Counts.get('numberOfProducts')
      }
    });

    this.selected = [];

    this.query = {
      order: 'name',
      limit: 1,
      page: 1
    };

  }

  pageChanged(newPage) {
    this.page = newPage;
  }

  sortChanged(sort) {
    this.sort = sort;
  }

}

const name = 'productsList';

//create a module
export default angular.module('productsList', [
  angularMeteor,
  uiRouter,
  utilsPagination,
  ngMaterial,
  'md.data.table',
  ProductsSort,
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
