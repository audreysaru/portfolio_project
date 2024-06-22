import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
function Home() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', { username, email, password });
      alert('Sign up successful! You can now log in.');
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('Sign up failed. Please try again.');
    }
  };

  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to Daily3</h1>
        <p>Your daily companion for movement, meditation, and more.</p>
        <form onSubmit={handleSignUp} className="signup-form">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Home;