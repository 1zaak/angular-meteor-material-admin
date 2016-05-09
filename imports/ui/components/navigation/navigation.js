import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import './navigation.html';
 
const name = 'navigation';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  ngMaterial
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name
});