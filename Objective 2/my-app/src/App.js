import React from 'react';
import './App.css';
import UserProfile from './USER/UserProfile';

const App = () => {
  const user = {
    name: 'Anirudh Chaturvedi',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Aiden',
    degree: 'B.Tech Computer Science',
    bio: 'Software Developer at CG infinity. Passionate about .NET Core and React.'
  };
   const user1 = {
    name: 'Satyam Chaturvedi',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Aidan',
    degree: 'B.Tech Computer Science',
    bio: 'Software Developer at CG infinity. Passionate about .NET Core and React.'
  };

  return (
    <>
    <h1>Users Profiles</h1>
    <span style={{ padding: '40px' }}>
      <UserProfile initialProfile={user} />
    </span>
    <span style={{ padding: '40px' }}>
      <UserProfile initialProfile={user1} />
    </span>
    </>
  );
};

export default App;

