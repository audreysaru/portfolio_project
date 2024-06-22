import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';

function UserProfile() {
  const [userInfo, setUserInfo] = useState({});
  const [avatar, setAvatar] = useState(null);
  const userId = 1; // Change this to get the actual logged-in user's ID

  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then(response => setUserInfo(response.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, [userId]);

  const handleAvatarChange = async (e) => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);

    try {
      const response = await axios.post(`/api/user/${userId}/avatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  return (
    <div className="user-profile">
      <div className="container">
        <h1>User Profile</h1>
        <div className="profile-info">
          {userInfo.avatar && <img src={`/${userInfo.avatar}`} alt="Avatar" className="avatar" />}
          <h2>Username: {userInfo.username}</h2>
          <p>Email: {userInfo.email}</p>
          <p>Member Since: {userInfo.memberSince}</p>
        </div>
        <div className="update-avatar">
          <h2>Update Profile Picture</h2>
          <input type="file" onChange={handleAvatarChange} />
        </div>
        <div className="activity-history">
          <h2>Activity History</h2>
          <ul>
            {userInfo.activities && userInfo.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;