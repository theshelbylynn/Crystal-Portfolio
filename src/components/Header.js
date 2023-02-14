import logo from './images/logo.png';
import React from 'react';

function Header() {
    return (
      <div className="header">
        <a href="/">
        <img src={logo} alt="Logo" />
        </a>
      </div>
      
    );
  }



export default Header;