import React from 'react';

const Activity = ({ activity, onNext, onDone }) => {
    return (
        <div>
            <h2>{activity} Video</h2>
            <video src={`/${activity}.mp4`} controls />
            <div>
                {onNext && <button onClick={onNext}>Next</button>}
                <button onClick={onDone}>Done for the Day</button>
            </div>
        </div>
    );
};

export default Activity;
