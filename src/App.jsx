import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import List from './List';

function App() {
  const [items, setItems] = useState([]);

  const addItems = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const deleteItem = (itemId) => {
    const newItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(newItems);
  };

  const checkItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id == itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <main>
      <Form addItems={addItems} />
      <List items={items} deleteItem={deleteItem} checkItem={checkItem} />
    </main>
  );
}

export default App;
