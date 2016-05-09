import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './productImage.html';
import { Images } from '../../../api/images';
 
class ProductImage {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
 
    this.helpers({
      mainImage() {
        const images = this.getReactively('images', true);
        if (images) {
          return Images.findOne({
            _id: images[0]
          });
        }
      }
    });
  }
}
 
const name = 'productImage';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  bindings: {
    images: '<'
  },
  controllerAs: name,
  controller: ProductImage
});