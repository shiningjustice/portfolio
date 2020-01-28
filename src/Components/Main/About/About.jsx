// Frameworks
import React from 'react';
import { useState, useEffect } from 'react';
// Components
import dataStore from '../../../helpers/DataStore/dataStore';
import { ExpandLess } from '@material-ui/icons';
// Styles
import './About.css';

export default function About (props) {

  // State
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
    // select a random photo from the array 
    setPhotoOfPhoebe(getRandomPhoto());
  }, []);

  // return
  return (
    <section id="About" className={`About ${props.inheritedClassName}`}>
      <h2>hello world</h2>
      <div className="About___infoContainer">
        <p>I'm a Junior Full-stack Javascript Developer driven by creativity and 
        excellence. I love making beautifully functional (and functionally 
        beautiful) things.</p>
        <p>When I'm not coding or trying to describe myself I spend time with 
        people I love, climb, or pick something to do from a myriad of hobbies.</p>
        <div onClick={() => toggleMoreDisplay()} className="About___booper">
          {toggleMore ? (
            <span title="boop for more" className="About___pigNose" role="img" aria-label="emoji of pig nose">🐽</span>
          ) : (
            <ExpandLess style={{ fontSize: 40 }} />
          )}
        </div>
        <div className={`About___moreInfoContainer ${toggleMore}`}>
          <img src={photoOfPhoebe.url} alt={photoOfPhoebe.alt} className="displayGreyscale About__img"/>
          <div className="About___pContainer">
            <p>
              The marriage between functionality and design is something that I always come back to when talking about what I love to do. Sometimes distinct, other times overlapping, and still other times interchangeable, producing excellence in both function and design is an ellusive pursuit. It's hard to create, but clear when present. 
            </p>
            <p>
              Doing so means having a clear purpose, which drives the design, which requires experience and intuition, which drives functionality, requiring skill and expertise. It's a lot! I am by no means a master of these things, but I pursue them to achieve a quiet, but elegant, solution.
            </p>
            <p>
              While I am newer player in the tech field, my pursuit of excellence in developing creative and effective solutions to problems has been tested through getting my Bachelor's of Linguistics at UCLA and, more practically, through working in administration for a smaller but successful engineering company. <a className="About__a" title="Take me to the contact section!" href="#Contact">I'm currently job hunting</a> and am looking forward to working alongside and learning from a team of great programmers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};