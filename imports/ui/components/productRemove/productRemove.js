import angular from 'angular';
import angularMeteor from 'angular-meteor';
 import { Products } from '../../../api/products.js';
import './productRemove.html';
 
class ProductRemove {
  remove() {
    console.log('remove product');
    if (this.product) {
      Products.remove(this.product._id);
    };
console.log('remove product successful!');
  }
}
 
const name = 'productRemove';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  bindings: {
    product: '<'
  },
  controllerAs: name,
  controller: ProductRemove
});
