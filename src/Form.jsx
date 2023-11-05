import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItems }) => {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error('please enter item');
      return;
    }
    addItems(newItem);
    setNewItem('');
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
