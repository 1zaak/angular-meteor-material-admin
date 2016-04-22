import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './productDetails.html';
import { Products } from '../../../api/products';


class ProductDetails {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);


        this.productId = $stateParams.productId;


        this.helpers({
            product() {
                return Products.findOne({
                    _id: $stateParams.productId
                });
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
                price: this.product.price
            }
        }, (error) =>{
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
        template: '<product-details></product-details>'
    });
}
