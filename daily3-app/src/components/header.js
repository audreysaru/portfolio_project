import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if using navigation

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Daily3</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movement">Movement</Link></li>
            <li><Link to="/user-profile">User Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;