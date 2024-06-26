import React from 'react';
import { useHistory } from 'react-router-dom';
import ActivityPage from '../components/ActivityPage';

const Meditation = () => {
    const history = useHistory();

    const handleNextActivity = () => {
        history.push('/morning-pages');
    };

    const handleDone = () => {
        history.push('/');
    };

    return (
        <ActivityPage
            title="Meditation"
            playlistId="PLBE1Kiiy00ezYR4-Rrgpf9PvFWJELStiv"
            nextActivity={handleNextActivity}
            onDone={handleDone}
        />
    );
};

export default Meditation;
