import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/contacts">Contacts</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;