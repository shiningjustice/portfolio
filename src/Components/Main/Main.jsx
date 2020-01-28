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
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
};