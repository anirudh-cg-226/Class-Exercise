import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomUser = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const fetchUser = () => {
    axios.get('https://randomuser.me/api/')
      .then(response => {
        setUser(response.data.results[0]);
        setError('');
      })
      .catch(err => {
        setError('Failed to fetch user data');
        setUser(null);
        console.error(err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Random User Profile</h2>
      <button onClick={fetchUser}>Fetch New User</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div style={{ marginTop: '20px' }}>
          <img src={user.picture.large} alt="User" />
          <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
        </div>
      )}
    </div>
  );
};

export default RandomUser;