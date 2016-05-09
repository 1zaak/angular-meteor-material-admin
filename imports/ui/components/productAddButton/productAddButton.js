import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './productAddButton.html';
import './productAddModal.html';
import { name as ProductAdd } from '../productAdd/productAdd';
 
class ProductAddButton {
  constructor($mdDialog, $mdMedia) {
    'ngInject';
 
    this.$mdDialog = $mdDialog;
    this.$mdMedia = $mdMedia
  }
 
  open(event) {
    this.$mdDialog.show({
      controller($mdDialog) {
        'ngInject';
        
        this.close = () => {
          $mdDialog.hide();
        }
      },
      controllerAs: 'productAddModal',
      templateUrl: `imports/ui/components/${name}/productAddModal.html`,
      targetEvent: event,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
    });
  }
}
 
const name = 'productAddButton';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  ProductAdd
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: ProductAddButton
});