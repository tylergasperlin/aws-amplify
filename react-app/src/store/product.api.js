import { parseItem, parseList } from './action-utils';
import { DataStore } from '@aws-amplify/datastore';
import { Products } from '../models/index';

export const deleteProductApi = async (product) => {
  const modelToDelete = await DataStore.query(Products, product.id);
  DataStore.delete(modelToDelete);
};

export const updateProductApi = async (product) => {
  const modelToUpdate = await DataStore.query(Products, product.id);

  try {
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
  to apply updates to the item’s fields rather than mutating the instance directly */
    const result = await DataStore.save(
      Products.copyOf(modelToUpdate, (copiedModelToUpdate) => {
        copiedModelToUpdate.name = product.name;
        copiedModelToUpdate.description = product.description;
        copiedModelToUpdate.quantity = product.quantity;
      }),
    );
    return parseItem(result, 200);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

export const addProductApi = async (product) => {
  const productToSave = new Products({
    name: product.name,
    description: product.description,
    quantity: parseInt(product.quantity),
  });
  const result = await DataStore.save(productToSave);

  return parseItem(result, 201);
};

export const loadProductsApi = async () => {
  const response = await DataStore.query(Products);

  return parseList(response, 200);
};
