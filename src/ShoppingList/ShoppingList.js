import { useEffect } from "react";
import ShoppingListItem from "../ShoppingListItem";
import { observer } from 'mobx-react-lite';

export default observer(({ items, itemsCount, onUpdateItem }) => {
  return (
    <>
      <h1>Liste {itemsCount} huhu</h1>
      <ul>
        {items.map((item) => <ShoppingListItem key={item.id} item={item} onUpdateItem={onUpdateItem} />)}
      </ul>
    </>
  );
});
