import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from './axios'; // Import the Axios instance

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/personal-bests?username=${user.name}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
