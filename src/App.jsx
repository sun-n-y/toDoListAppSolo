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

  return (
    <main>
      <Form addItems={addItems} />
      <List items={items} deleteItem={deleteItem} />
    </main>
  );
}

export default App;
