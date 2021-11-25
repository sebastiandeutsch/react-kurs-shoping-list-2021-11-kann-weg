import { observer } from "mobx-react-lite";

export default observer(({ item, onUpdateItem }) => {
  const handleIncreaseClick = () => {
    const newItem = {
      ...item,
      quantity: item.quantity + 1
    };

    onUpdateItem(newItem);
  }

  const handleDecreaseClick = () => {
    if (item.quantity - 1 >= 0) {
      const newItem = {
        ...item,
        quantity: item.quantity - 1
      };

      onUpdateItem(newItem);
    }
  }

  return (
    <li key={item.id}>
      <span>{item.name} ({item.quantity})</span>
      <button onClick={handleIncreaseClick}>+</button>
      <button onClick={handleDecreaseClick}>-</button>
    </li>
  );
});
