import { Mongo } from 'meteor/mongo';
 
export const Products = new Mongo.Collection('products');

 
Products.allow({
  insert(userId, product) {
    return userId && product.owner === userId;
  },
  update(userId, product, fields, modifier) {
    return userId && product.owner === userId;
  },
  remove(userId, product) {
    return userId && product.owner === userId;
  }
});