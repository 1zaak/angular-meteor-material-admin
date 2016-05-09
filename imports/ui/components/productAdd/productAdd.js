import angular from 'angular';
import angularMeteor from 'angular-meteor';
 import { Products } from '../../../api/products/index';
import './productAdd.html';
import { Meteor } from 'meteor/meteor';
import { name as ProductUpload } from '../productUpload/productUpload';
 
class AddProduct {
  constructor() {
    this.product = {};
  }

  submit(){
    
    this.product.owner = Meteor.user()._id;
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
  angularMeteor,
  ProductUpload
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: AddProduct
});