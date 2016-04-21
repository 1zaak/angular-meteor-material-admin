import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { name as EcogivAdmin } from "../imports/ui/components/ecogivAdmin/ecogivAdmin";

angular.module('ecogiv-admin', [
  angularMeteor,
  EcogivAdmin
])
  