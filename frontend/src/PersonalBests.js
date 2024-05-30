import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from './axios'; // Import the Axios instance

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const PersonalBests = () => {
  const query = useQuery();
  const username = query.get('username');
  const [personalBests, setPersonalBests] = useState([]);

  useEffect(() => {
    const fetchPersonalBests = async () => {
      if (username) {
        try {
          const response = await axios.get(`/api/personal-bests/${username}/`);
          setPersonalBests(response.data);
        } catch (error) {
          console.error('Error fetching personal bests', error);
        }
      }
    };

    fetchPersonalBests();
  }, [username]);

  if (!username) {
    return <p>No username provided in query string.</p>
  }

  return (
    <div>
      <h1>Personal Bests for {username}</h1>
      <ul>
        {personalBests.map((best, index) => (
          <li key={index}>
            <p>Constant Weight: {best.constant_weight}</p>
            <p>Constant Weight Bifins: {best.constant_weight_bifins}</p>
            <p>Constant Weight Nofins: {best.constant_weight_nofins}</p>
            <p>Free Immersion: {best.free_immersion}</p>
            <p>Static Apnea: {best.static_apnea}</p>
            <p>Dynamic: {best.dynamic}</p>
            <p>Dynamics Bifins: {best.dynamics_bifins}</p>
            <p>Dynamic Nofins: {best.dynamic_nofins}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalBests;
