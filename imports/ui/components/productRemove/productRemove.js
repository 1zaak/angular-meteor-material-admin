import angular from 'angular';
import angularMeteor from 'angular-meteor';
 import { Products } from '../../../api/products/index';
import './productRemove.html';
 
class ProductRemove {
 constructor($mdToast){
  'ngInject'

  
  this.$mdToast = $mdToast;
 }
  remove() {
    console.log('removing product..');
    if (this.product) {
      Products.remove(this.product._id, (err) => {
        console.log("error during removing product (" + err + ")")
        this.$mdToast.showSimple('Sorry you have no access..');

      });
    };
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
