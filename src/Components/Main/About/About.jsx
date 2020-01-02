// Frameworks
import React from 'react';
import { useState, useEffect, useRef } from 'react';
// Components
import dataStore from '../../../helpers/DataStore/dataStore';
import { ExpandLess } from '@material-ui/icons';
// Styles
import './About.css';

export default function About (props) {

  // State
  const [displayIntro, setDisplayIntro] = useState(true);
  const [toggleMore, setToggleMore] = useState('hidden');
  const [photoOfPhoebe, setPhotoOfPhoebe] = useState('');

  // Other Functions
  const toggleMoreDisplay = () => {
    // Toggles the extra info in the about section
    if (toggleMore === 'hidden') {
      setToggleMore('');
    } else {
      setToggleMore('hidden');
    };
  };

  const getRandomPhoto = () => {
    const i = Math.floor(Math.random() * dataStore.photosUrls.length);
    return dataStore.photosUrls[i];
  };

  // Lifecycle functions
  useEffect(() => {
    // hide specific intro after fades out
    setTimeout(() => setDisplayIntro('hidden'), 7000)
    // // select a random photo from the array 
    setPhotoOfPhoebe(getRandomPhoto());
  }, []);

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
      <div className="About___infoContainer">
        <p className="notIntro">I'm a Junior Full-stack Javascript Developer driven by creativity and 
        excellence. I love making beautifully functional (and functionally 
        beautiful) things.</p>
        <p className="notIntro">When I'm not coding or trying to describe myself I spend time with 
        people I love, climb, or pick something to do from a myriad of hobbies.</p>
        <div onClick={() => toggleMoreDisplay()} className="notIntro About___booper">
          {toggleMore ? (
            <span title="boop for more" className="About___pigNose displayGreyscale" role="img" aria-label="emoji of pig nose">🐽</span>
          ) : (
            <ExpandLess style={{ fontSize: 40 }} />
          )}
        </div>
        <div className={`About___moreInfoContainer ${toggleMore}`}>
          <img src={photoOfPhoebe.url} alt={photoOfPhoebe.alt} className="displayGreyscale About__img"/>
          <div className="About___pContainer">
            <p>
              The marriage between functionality and design something that I always come back to when talking about what I love to do. Sometimes distinct, other times overlapping, and still other times interchangeable, producing excellence in both function and design is an ellusive pursuit. It's hard to create, but clear when present. 
            </p>
            <p>
              Doing so means having a clear purpose, which drives the design, which requires experience and intuition, which drives functionality, requiring skill and expertise. It's a lot! I am by no means a master of these things, but I pursue them to achieve a quiet, but elegant, solution.
            </p>
            <p>
              While I am newer player in the tech field, my pursuit of excellence in developing creative and effective solutions to problems has been tested through getting my Bachelor's of Linguistics at UCLA and, more practically, through working in administration for a smaller but successful engineering company. ___________________
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};