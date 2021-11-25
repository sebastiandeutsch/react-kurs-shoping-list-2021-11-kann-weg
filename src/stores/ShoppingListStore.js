import React, { createContext } from 'react';
import { makeObservable, observable, action, } from "mobx";

class ShoppingListStore {
  items = [{
    id: 1,
    name: "Bananen",
    quantity: 3,
    isBought: false
  }];
  itemsCount = 1;

  constructor() {
    makeObservable(this, {
      items: observable,
      itemsCount: observable,
      addItem: action,
      updateItem: action
    });
  }

  addItem(item) {
    this.items.push(item);
    this.itemsCount += 1;
  }

  updateItem(item) {
    const index = this.items.findIndex((i) => i.id === item.id);
    this.items[index] = item;
  }
}

export const shoppingListStore = new ShoppingListStore();
const ShoppingListStoreContext = createContext(shoppingListStore);

export default ShoppingListStoreContext;
