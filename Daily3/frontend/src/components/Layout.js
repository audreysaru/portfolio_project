import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import './Layout.css';

const Layout = () => {
    return (
        <div>
            <header className="header">
                <Logo />
                <h1>Daily3</h1>
            </header>
            <main>
                <Outlet />  {/* This will render the current page/component */}
            </main>
        </div>
    );
};

export default Layout;
