// Frameworks
import React from 'react';
// Components
import Button from '../../Button/Button'
import { Email, GitHub, LinkedIn } from '@material-ui/icons'
// Styles
import './Contact.css';

export default function Contact (props) {
  return (
    <section id="Contact" className={`Contact ${props.inheritedClassName}`}>
      <h2>Contact</h2>
      <p>I don't bite.</p>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
      <div className="Contact___links">
        <Button><Email style={{ fontSize: 40 }} /></Button>
        <Button><GitHub style={{ fontSize: 40 }} /></Button>
        <Button><LinkedIn style={{ fontSize: 40 }} /></Button>
      </div>
    </section>
  );
};