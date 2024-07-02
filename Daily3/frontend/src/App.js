import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Movement from './pages/Movement';
import Meditation from './pages/Meditation';
import MorningPages from './pages/MorningPages';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import LandingPage from './components/LandingPage';
import Layout from './components/Layout';

const App = () => {
    const [hasSeenLandingPage, setHasSeenLandingPage] = useState(false);

    useEffect(() => {
        const seenLandingPage = localStorage.getItem('hasSeenLandingPage');
        if (seenLandingPage) {
            setHasSeenLandingPage(true);
        }
    }, []);

    return (
        <Routes>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="movement" element={<Movement />} />
                <Route path="meditation" element={<Meditation />} />
                <Route path="morning-pages" element={<MorningPages />} />
            </Route>

            <Route
                path="*"
                element={<Navigate to={hasSeenLandingPage ? "/login" : "/landing"} />}
            />
        </Routes>
    );
};

export default App;
