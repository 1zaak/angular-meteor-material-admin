import { Meteor } from 'meteor/meteor';
import { Products } from '../imports/api/products.js';
import { Fake } from 'meteor/anti:fake';

Meteor.startup(function () {
  if (Products.find().count()===0){
     for (var i = 0; i < 5; i++) {
      let product = Fake.word();
      let price = Math.random() * (1000 - 1) + 1;

      Products.insert({
        name: product,
        price: price.toFixed(2)
      })
    }
  }
});