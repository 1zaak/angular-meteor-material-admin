import angular from 'angular';
import angularMeteor from 'angular-meteor';
 import { Products } from '../../../api/products.js';
import './productAdd.html';
 
class AddProduct {
  constructor() {
    this.product = {};
  }

  submit(){
    console.log("submitted!");
    Products.insert(this.product);
    this.reset();
    console.log("Successfully inserted product!");
  }

  reset(){
    this.product = {};
  }
}
 
const name = 'productAdd';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: AddProduct
});