import React from 'react';
import { useHistory } from 'react-router-dom';
import ActivityPage from '../components/ActivityPage';

const Movement = () => {
    const history = useHistory();

    const handleNextActivity = () => {
        history.push('/meditation');
    };

    const handleDone = () => {
        history.push('/');
    };

    return (
        <ActivityPage
            title="Movement"
            playlistId="PLBE1Kiiy00eyxibSkosoo6EGz-orz7U8S"
            nextActivity={handleNextActivity}
            onDone={handleDone}
        />
    );
};

export default Movement;
