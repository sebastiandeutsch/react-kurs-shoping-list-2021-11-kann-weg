import { useRef } from 'react';

let id = 2;

export default function ShoppingItemForm({ onSubmit }) {
  const nameRef = useRef();
  const quantityRef = useRef();
  const handleAddItemClick = () => {
    const item = {
      id: id++,
      name: nameRef.current.value,
      quantity: parseInt(quantityRef.current.value)
    }

    onSubmit(item);
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
}
