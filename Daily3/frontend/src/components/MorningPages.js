import React, { useState } from 'react';
import Activity from './Activity';

const MorningPages = ({ onDone }) => {
    const [timer, setTimer] = useState(0);

    const handleChange = (e) => {
        setTimer(e.target.value);
    };

    return (
        <div>
            <Activity
                activity="Morning Pages"
                videoSrc="/morningpages.mp4"
                onNext={null}
                onDone={onDone}
            />
            <div>
                <input type="number" value={timer} onChange={handleChange} placeholder="Set timer (minutes)" />
            </div>
        </div>
    );
};

export default MorningPages;
