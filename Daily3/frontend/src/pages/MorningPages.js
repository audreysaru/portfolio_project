import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MorningPages.css';

const MorningPages = () => {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(0);

    const handleTimerChange = (e) => {
        setTimer(e.target.value);
    };

    const handleDone = () => {
        navigate('/');
    };

    return (
        <div className="activity-page">
            <h1>Morning Pages</h1>
            <div className="timer-setup">
                <label>
                    Set Timer:
                    <input type="number" value={timer} onChange={handleTimerChange} />
                </label>
                <button onClick={() => alert(`Timer set for ${timer} minutes`)}>Start</button>
            </div>
            <div className="activity-controls">
                <button onClick={handleDone}>Done for Today</button>
            </div>
        </div>
    );
};

export default MorningPages;
