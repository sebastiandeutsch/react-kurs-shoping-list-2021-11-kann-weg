import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import ShoppingList from "./ShoppingList";
import ShoppingItemForm from "./ShoppingItemForm";
import ShoppingListStoreContext from './stores/ShoppingListStore';

function App() {
  const shoppingListStore = useContext(ShoppingListStoreContext);
  console.log( shoppingListStore );

  const handleUpdateItem = (item) => {
    shoppingListStore.updateItem(item);
  }

  return (
    <>
      <ShoppingItemForm />
      <ShoppingList items={shoppingListStore.items} itemsCount={shoppingListStore.itemsCount} onUpdateItem={handleUpdateItem} />
    </>
  );
}

export default observer(App);
