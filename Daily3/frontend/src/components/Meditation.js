import React from 'react';
import Activity from './Activity';

const Meditation = ({ onNext, onDone }) => {
    return (
        <Activity
            activity="Meditation"
            videoSrc="/meditation.mp4"
            onNext={onNext}
            onDone={onDone}
        />
    );
};

export default Meditation;
