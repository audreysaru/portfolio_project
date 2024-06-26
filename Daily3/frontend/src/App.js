import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Movement from './pages/Movement';
import Meditation from './pages/Meditation';
import MorningPages from './pages/MorningPages';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import LandingPage from './components/LandingPage';

const App = () => {
    const [hasSeenLandingPage, setHasSeenLandingPage] = useState(false);

    useEffect(() => {
        const seenLandingPage = localStorage.getItem('hasSeenLandingPage');
        if (seenLandingPage) {
            setHasSeenLandingPage(true);
        }
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/landing" component={LandingPage} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/movement" component={Movement} />
                <Route path="/meditation" component={Meditation} />
                <Route path="/morning-pages" component={MorningPages} />
                <Route path="/" component={Homepage} />
                <Redirect to={hasSeenLandingPage ? '/login' : '/landing'} />
            </Switch>
        </Router>
    );
};

export default App;
