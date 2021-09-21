import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <nav className='header-nav'>
                <ul> Home</ul>
                <ul>Country</ul>
                <ul>Region</ul>
            </nav>
        </div>
    );
};

export default Header;