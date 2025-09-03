import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
export default Header;