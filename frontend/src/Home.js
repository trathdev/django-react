import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/message/')
      .then(response => {
        setMessage(response.data.text);
      })
      .catch(error => {
        console.error('There was an error fetching the message!', error);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;