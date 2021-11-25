import { observer } from "mobx-react-lite";

import { useRef, useContext } from 'react';
import ShoppingListStoreContext from "../stores/ShoppingListStore";

let id = 2;

export default observer(() => {
  const shoppingListStore = useContext(ShoppingListStoreContext);

  const nameRef = useRef();
  const quantityRef = useRef();
  const handleAddItemClick = () => {
    const item = {
      id: id++,
      name: nameRef.current.value,
      quantity: parseInt(quantityRef.current.value)
    }

    shoppingListStore.addItem(item);

//    onSubmit(item);
  };

  return (
    <div>
      <div>
        <label htmlFor="name" >Name: </label>
        <input ref={nameRef} type="text" id="name" />
      </div>
      <div>
        <label htmlFor="quantity" >Quanitity: </label>
        <input ref={quantityRef} type="number" id="quantity" />
      </div>
      <div>
        <button onClick={handleAddItemClick}>Add Item</button>
      </div>
    </div>
  );
});
