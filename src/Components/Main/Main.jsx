// Frameworks
import React from 'react';
// Components
import About from '../Main/About/About';
import Projects from '../Main/Projects/Projects';
import Contact from '../Main/Contact/Contact';
// Styles
import './Main.css';

export default function Main () {
  return (
    <main className="Main">
      <About inheritedClassName="Main__section"></About>
      <Projects inheritedClassName="Main__section notIntro"></Projects>
      <Contact inheritedClassName="Main__section notIntro"></Contact>
    </main>
  );
};