import React from 'react';
import ActivityPage from '../components/ActivityPage';

const Movement = ({ onNext, onDone }) => {
    return (
        <ActivityPage
            title="Movement"
            playlistId="PLBE1Kiiy00eyxibSkosoo6EGz-orz7U8S"
            nextActivity={onNext}
            onDone={onDone}
        />
    );
};

export default Movement;
