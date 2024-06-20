import React from 'react';

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="container">
        <h1>User Profile</h1>
        <div className="profile-info">
          <h2>Username: JohnDoe</h2>
          <p>Email: johndoe@example.com</p>
          <p>Member Since: January 2023</p>
        </div>
        <div className="activity-history">
          <h2>Activity History</h2>
          <ul>
            <li>Completed Movement Activity 1</li>
            <li>Completed Meditation Session</li>
            {/* Add more activity history items */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;