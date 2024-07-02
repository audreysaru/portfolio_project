import React from 'react';
import YouTubePlaylist from './YouTubePlaylist';
import './ActivityPage.css';

const ActivityPage = ({ title, playlistId, nextActivity, onDone }) => {
    return (
        <div className="activity-page">
            <h1>{title}</h1>
            <YouTubePlaylist playlistId={playlistId} />
            <div className="activity-controls">
                <button onClick={nextActivity}>Next Activity</button>
                <button onClick={onDone}>Done for Today</button>
            </div>
        </div>
    );
};

export default ActivityPage;
