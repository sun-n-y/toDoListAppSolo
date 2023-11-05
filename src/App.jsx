import { useState } from 'react';
import Form from './Form';

function App() {
  const [items, setItems] = useState([]);
  return (
    <main>
      <Form />
    </main>
  );
}

export default App;
