import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Movement.css';

function Movement() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/api/movements')
      .then(response => setVideos(response.data))
      .catch(error => console.error('Error fetching movement data:', error));
  }, []);

  return (
    <div className="movement">
      <div className="container">
        <h1>Movement Activities</h1>
        <p>Explore various movement activities to energize your day!</p>
        {videos.map(video => (
          <div key={video.id} className="activity">
            <h2>{video.title}</h2>
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movement;