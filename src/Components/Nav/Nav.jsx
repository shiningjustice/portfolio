// Framework(s)
import React from 'react';
// Styles
import './Nav.css';

export default function Nav() {
  return (
    <nav className="Nav">
      <ul className="Nav__ul">
        <li><a href="#About" className="resetStyles underlineOnHover">About</a></li>
        <li><a href="#Projects" className="resetStyles underlineOnHover">Projects</a></li>
        <li><a href="#Contact" className="resetStyles underlineOnHover">Contact</a></li>
      </ul>
    </nav>
  );
};