import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = ({ initialProfile }) => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div className="user-profile">
      <img src={profile.avatar} alt="User Avatar" className="avatar" />
      {isEditing ? (
        <div className="edit-section">
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Bio"
          />
          <button onClick={toggleEdit}>Save</button>
        </div>
      ) : (
        <div className="view-section">
          <h2>{profile.name}</h2>
          <p>{profile.degree}</p>
          <p>{profile.bio}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;