import React from 'react';
import './Movement.css';
function Movement() {
  return (
    <div className="movement">
      <div className="container">
        <h1>Movement Activities</h1>
        <p>Explore various movement activities to energize your day!</p>
        <div className="activity">
          <h2>Activity 1</h2>
          <p>Description of Activity 1</p>
        </div>
        <div className="activity">
          <h2>Activity 2</h2>
          <p>Description of Activity 2</p>
        </div>
        {/* Add more activities as needed */}
      </div>
    </div>
  );
}

export default Movement;