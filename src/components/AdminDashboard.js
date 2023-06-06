import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const history = useNavigate();
  const [content, setContent] = useState([]);

  // Fetch content from the backend
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content'); // Replace with your API endpoint
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  // Function to handle content editing
  const handleEditContent = (contentId) => {
    history.push(`/admin/edit/${contentId}`); // Redirect to content editing page
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <button onClick={() => handleEditContent(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
