import angular from "angular";
import angularMeteor from "angular-meteor";

import "./ecogivAdmin.html";
import { name as ProductsList } from '../productsList/productsList.js';

class EcogivAdmin {}

const name = 'ecogivAdmin';

export default angular.module(name, [
                              angularMeteor,
                              ProductsList
]) .component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: EcogivAdmin
})



