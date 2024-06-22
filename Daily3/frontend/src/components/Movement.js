import React from 'react';
import Activity from './Activity';

const Movement = ({ onNext, onDone }) => {
    return (
        <Activity
            activity="Movement"
            videoSrc="/movement.mp4"
            onNext={onNext}
            onDone={onDone}
        />
    );
};

export default Movement;
