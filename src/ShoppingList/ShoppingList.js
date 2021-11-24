import ShoppingListItem from "../ShoppingListItem";

export default function ShoppingList({ items, onUpdateItem }) {
  return (
    <ul>
      {items.map((item) => <ShoppingListItem key={item.id} item={item} onUpdateItem={onUpdateItem} />)}
    </ul>
  );
}
