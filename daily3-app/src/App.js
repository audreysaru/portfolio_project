/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Movement from './pages/Movement';
import UserProfile from './pages/UserProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/user-profile" component={UserProfile} />
          <Route path="/movement" component={Movement} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer /> {/* Render the Footer component here */}
      </div>
    </Router>
  );
}

export default App;