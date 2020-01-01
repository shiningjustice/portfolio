// Frameworks
import React from 'react';
import { useState, useEffect } from 'react';
// Styles
import './About.css';

export default function About (props) {

  // State
  const [displayIntro, setDisplayIntro] = useState(true);

  // Lifecycle functions
  useEffect(() => {
    setTimeout(() => setDisplayIntro('hidden'), 7000)
  }, [])

  // return
  return (
    <section id="About" className={`About ${props.inheritedClassName}`}>
      <div className="intro">
        {/* Intro animates and types "hello world", then fades in and out
        "I'm Phoebe Law" */}
        <h2 className="intro Main__section__h2">
          <span className="g1">h</span>
          <span className="g2">e</span>
          <span className="g3">l</span>
          <span className="g4">l</span>
          <span className="g5">o</span>
          <span className="g6"> </span>
          <span className="g7">w</span>
          <span className="g8">o</span>
          <span className="g9">r</span>
          <span className="g10">l</span>
          <span className="g11">d</span>
        </h2>
        <h3 className={`intro secondaryFont ${displayIntro}`}>
          <span className="notBold">I'm</span> Phoebe Law
        </h3>
      </div>
      <p className="notIntro">I'm a Junior Full-stack Javascript Developer driven by creativity and 
      excellence. I love making beautifully functional (and functionally 
      beautiful) things.</p>
      <p className="notIntro">When I'm not coding or trying to describe myself I spend time with 
      people I love, climb, or pick something to do from a myriad of hobbies. I 
      also wear lots of deodorant.</p>
    </section>
  );
};