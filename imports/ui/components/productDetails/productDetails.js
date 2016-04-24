import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './productDetails.html';
import { Products } from '../../../api/products/index';


class ProductDetails {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('products');
    this.subscribe('users');

    this.productId = $stateParams.productId;


    this.helpers({
      product() {
        return Products.findOne({
          _id: $stateParams.productId
        });
      },
      users() {
        return Meteor.users.find({});
      }
    });
  }
  save() {
    console.log("Save running");
    Products.update({
      _id: this.product._id
    }, {
      $set: {
        name: this.product.name,
        price: this.product.price,
        public: this.product.public
      }
    }, (error) => {
      if (error) {
        console.log('Oops, unable to update the party...');
      } else {
        console.log('Done!');
      }
    })
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
    url: '/products/:productId',
    template: '<product-details></product-details>',
    resolve: {
      currentUser($q) {
        if (Meteor.userId() === null) {

          return $q.reject('AUTH_REQUIRED');
        } else {
          return $q.resolve();
        }
      }
    }
  });
}
