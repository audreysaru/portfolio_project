import React from 'react';
import ActivityPage from '../components/ActivityPage';

const Meditation = ({ onNext, onDone }) => {
    return (
        <ActivityPage
            title="Meditation"
            playlistId="PLBE1Kiiy00ezYR4-Rrgpf9PvFWJELStiv"
            nextActivity={onNext}
            onDone={onDone}
        />
    );
};

export default Meditation;
