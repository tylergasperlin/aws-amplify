import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';
import { DataStore } from '@aws-amplify/datastore';
import { Products } from '../models/index';

const captains = console;

export const deleteProductApi = async (product) => {
  const response = await axios.delete(`${API}/products/${product.id}`);

  const modelToDelete = await DataStore.query(Products, product.id);
  DataStore.delete(modelToDelete);
  return parseItem(response, 200);
};

export const updateProductApi = async (product) => {
  captains.log(product.id);
  //const response = await axios.put(`${API}/products/${product.id}`, product);
  /* Models in DataStore are immutable. To update a record you must use the copyOf function
  to apply updates to the item’s fields rather than mutating the instance directly */
  await DataStore.save(product);
  //return parseItem(response, 200);
  const response = await axios.put(`${API}/products/${product.id}`, product);
  return parseItem(response, 200);

};

export const addProductApi = async (product) => {
  //const response = await axios.post(`${API}/products`, product);
  await DataStore.save(
      new Products({
      'name': 'Lorem ipsum dolor sit amet',
      'description': 'Lorem ipsum dolor sit amet',
      'quantity': 1020
    })
  );
  const response = await axios.post(`${API}/products`, product);
  return parseItem(response, 201);
 // return parseItem(response, 201);
};

export const loadProductsApi = async () => {
  const response = await DataStore.query(Products);
  console.log(response)
  //const response = await axios.get(`${API}/products`);

  return parseList(response, 200);
};
