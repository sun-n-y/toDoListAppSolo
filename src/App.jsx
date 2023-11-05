import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import List from './List';
import { ToastContainer, toast } from 'react-toastify';

const saveToLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const getItems = JSON.parse(localStorage.getItem('list') || '[]');

function App() {
  const [items, setItems] = useState(getItems);

  const addItems = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    saveToLocalStorage(newItems);
    toast.success('item added');
  };

  const deleteItem = (itemId) => {
    const newItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(newItems);
    saveToLocalStorage(newItems);
    toast.success('item deleted');
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
    saveToLocalStorage(newItems);
  };

  return (
    <main>
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar />
      <Form addItems={addItems} />
      <List items={items} deleteItem={deleteItem} checkItem={checkItem} />
    </main>
  );
}

export default App;
