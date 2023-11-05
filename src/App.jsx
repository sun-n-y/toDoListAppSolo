import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';

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
  return (
    <main>
      <Form addItems={addItems} />
    </main>
  );
}

export default App;
