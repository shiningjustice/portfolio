// Frameworks
import React from 'react';
// Components
import Button from '../../Button/Button'
import { Email, GitHub, LinkedIn, Twitter, Description } from '@material-ui/icons'
// Styles
import './Contact.css';

export default function Contact (props) {
  return (
    <section id="Contact" className={`Contact ${props.inheritedClassName}`}>
      <h2>Contact</h2>
      <div className="Contact___infoContainer">
        <p>I'm currently looking for the right job opportunity. If you think I'd be a good fit for your team or project, please feel free to each out!</p>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
        <div className="Contact___links">
          <Button href="mailto:phoebecodes@gmail.com" title="phoebecodes@gmail.com" ariaLabel="Click to send me an email"><Email style={{ fontSize: 40 }} /></Button>
          <Button href="https://github.com/shiningjustice" title="GitHub: @shiningjustice" ariaLabel="Click to visit my GitHub"><GitHub style={{ fontSize: 40 }} /></Button>
          <Button href="https://linkedin.com/in/phoebecodes" title="LinkedIn: @phoebecodes" ariaLabel="Click to visit my LinkedIn"><LinkedIn style={{ fontSize: 40 }} /></Button>
          <Button href="https://twitter.com/phoebecodes" title="Twitter: @phoebecodes" ariaLabel="Click to visit my Twitter"><Twitter style={{ fontSize: 40 }} /></Button>
          <Button href="https://drive.google.com/file/d/1Sq3GJKnCWMCQ_z2CzTXlR62CrJMbaJpw/view?usp=sharing" title="Resume" ariaLabel="Click to view my resume"><Description style={{ fontSize: 40 }} /></Button>
        </div>
      </div>
    </section>
  );
};