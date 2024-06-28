import React, { useEffect, useState } from 'react';
import { getProfile, addActivityHistory } from '../api';
import Movement from './Movement';
import Meditation from './Meditation';
import MorningPages from './MorningPages';
import './Homepage.css';

const Homepage = () => {
    const [user, setUser] = useState(null);
    const [currentActivity, setCurrentActivity] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await getProfile();
                setUser(data);
            } catch (err) {
                alert(err.message);
            }
        };
        fetchProfile();
    }, []);

    const handleNext = async (activity) => {
        try {
            await addActivityHistory(activity);
            if (activity === 'Movement') {
                setCurrentActivity('Meditation');
            } else if (activity === 'Meditation') {
                setCurrentActivity('Morning Pages');
            } else {
                setCurrentActivity(null);
                alert('Great job today ... have a focused day ahead!');
            }
        } catch (err) {
            alert(err.message);
        }
    };

    const handleDone = async (activity) => {
        try {
            await addActivityHistory(activity);
            setCurrentActivity(null);
            alert('Great job today ... have a focused day ahead!');
        } catch (err) {
            alert(err.message);
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            {currentActivity ? (
                <>
                    {currentActivity === 'Movement' && (
                        <Movement onNext={() => handleNext('Movement')} onDone={() => handleDone('Movement')} />
                    )}
                    {currentActivity === 'Meditation' && (
                        <Meditation onNext={() => handleNext('Meditation')} onDone={() => handleDone('Meditation')} />
                    )}
                    {currentActivity === 'Morning Pages' && (
                        <MorningPages onDone={() => handleDone('Morning Pages')} />
                    )}
                </>
            ) : (
                <div>
                    <h1>Welcome, {user.firstName}</h1>
                    <h2>Daily 3 Activities</h2>
                    <ul>
                        <li>
                            <button onClick={() => setCurrentActivity('Movement')}>Movement</button>
                        </li>
                        <li>
                            <button onClick={() => setCurrentActivity('Meditation')}>Meditation</button>
                        </li>
                        <li>
                            <button onClick={() => setCurrentActivity('Morning Pages')}>Morning Pages</button>
                        </li>
                    </ul>
                    <h2>Activity History</h2>
                    <ul>
                        {user.activityHistory.map((entry, index) => (
                            <li key={index}>{new Date(entry.date).toLocaleDateString()}: {entry.activities.join(', ')}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Homepage;
