import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Layout.css';

const Layout = () => {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="Daily3 Logo" />
                <h1>Daily3</h1>
            </header>
            <main>
                <Outlet />  {/* This will render the current page/component */}
            </main>
        </div>
    );
};

export default Layout;
