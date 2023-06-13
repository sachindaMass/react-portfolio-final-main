import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const AdminDashboard = () => {
  const [name, setName] = useState("");


  return (
      <form>
        <label>Enter your name:
          <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AdminDashboard />);
export default AdminDashboard;
