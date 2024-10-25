import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Links</Link></li>
        <li><Link to="/about">Events</Link></li>
        <li><Link to="/contact">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;