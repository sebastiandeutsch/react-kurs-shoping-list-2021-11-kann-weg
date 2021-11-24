import { useState } from 'react';

import ShoppingList from "./ShoppingList";
import ShoppingItemForm from "./ShoppingItemForm";

function App() {
  const [items, setItems] = useState([{
    id: 1,
    name: "Bananen",
    quantity: 3
  }]);

  const handleAddItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
  }

  const handleUpdateItem = (item) => {
    const index = items.findIndex((i) => i.id === item.id);

    const newItems = [...items];
    newItems[index] = item;
    setItems(newItems);
  }

  return (
    <>
      <ShoppingItemForm onSubmit={handleAddItem} />
      <ShoppingList items={items} onUpdateItem={handleUpdateItem} />
    </>
  );
}

export default App;
