import React from 'react';
import './YouTubePlaylist.css';

const YouTubePlaylist = ({ playlistId }) => {
    return (
        <div className="youtube-container">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Playlist"
            ></iframe>
        </div>
    );
};

export default YouTubePlaylist;
