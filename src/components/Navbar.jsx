import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">TruthCheck</div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${open ? 'open' : ''}`}></div>
        <div className={`bar ${open ? 'open' : ''}`}></div>
        <div className={`bar ${open ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/detect" onClick={closeMenu}>Detect</Link></li>
        <li><Link to="/how-it-works" onClick={closeMenu}>How It Works</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
