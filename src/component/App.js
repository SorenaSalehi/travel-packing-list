import { useState } from "react";
import Logo from "./logo";
import PackingList from "./PackingList";
import Form from "./form";
import  Stats  from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 5, packed: true },
// ];
export default function App() {
  //new(lifting up state technic)
  //cm:1.now it is state in App ,
  //2.handle Add Item as prop in Form
  //3.Items as prop in PackingList
  const [items, setItems] = useState([]);
  //cm(Add items)
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  //cm(Remove item)
  function handleDeleteItem(id) {
    //set a new items whiteouts the selected id
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //cm(toggle items)
  function handleToggleItem(id) {
    //create a new object And change the selected item packed
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  //cm(clear list)
  function handleClearList() {
    if (items.length === 0) return;
    //confirm(boolean)
    const confirm = window.confirm("Are you sure for delete all items? 🤔");
    //to original
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo/>
      {/* //cm(using on for props in a convention) */}
      <Form onAddItem={handleAddItems}/>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items}/>
    </div>
  );
}
