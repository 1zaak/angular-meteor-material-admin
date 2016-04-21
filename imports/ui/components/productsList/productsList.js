import angular from "angular";
import angularMeteor from "angular-meteor";
import './productsList.html';

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
  angularMeteor
])
  .component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: ProductsList
  })