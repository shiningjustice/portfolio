// Framework
import React from 'react';

// Components
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Home = (props) => {
  return (
    <>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
};

export default Home;