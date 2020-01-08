// Framework(s)
import React from 'react';
// Components
import Nav from '../Nav/Nav.jsx';
// Styles
import './Header.css';

export default function Header(props) {
  return (
    <header className={`Header ${props.inheritedClassName}`}>
      <Nav></Nav>
      <h1 className="font1 bold">
        <a href="https://phoebecodes.now.sh" className="resetStyles">Phoebe Law</a>
      </h1>
    </header>
  );
};