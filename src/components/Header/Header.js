import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="/home">home</a>
                <a href="/about">countries</a>
                <a href="/mon">mon</a>
            </nav>
            <p className='sub'>visit us</p>
        </div>
    );
};

export default Header;