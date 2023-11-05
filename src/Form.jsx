import { useState } from 'react';

const Form = ({ addItems }) => {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItems(newItem);
  };
  return (
    <section className="section-center">
      <h1>To-do List</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit">add item</button>
        </div>
      </form>
    </section>
  );
};
export default Form;
