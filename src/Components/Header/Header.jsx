// Framework(s)
import React from 'react';
import { useState, useEffect }from 'react';
// Components
import Nav from '../Nav/Nav.jsx';
// Styles
import './Header.css';

export default function Header(props) {
  // STATE
  const [displayForScroll, setDisplayForScroll] = useState('notScrolling');
  
  // FUNCTIONS
  // Function watches invisible div #scrollMarker that marks if the content from Main 
  // has passed into the Header. if so, it sets state to change
  let observer;
  const styleOnScroll = () => {
    // if (scrollLocation !== starting && )
    console.log(observer)
    if (
      "intersectionObserver" in window && 
      "intersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      observer = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < 80) {
          setDisplayForScroll('scrolling');
        } else {
          setDisplayForScroll('notScrolling')
        }
      });
      observer.observe(document.querySelector("#scrollMarker"))
    }
  };

  // LIFECYCLE METHODS
  useEffect(() => {
    console.log('i ran again');
    styleOnScroll();
  }, [observer]);

  // RETURN
  return (
    <header className={`Header ${displayForScroll} ${props.inheritedClassName}`}>
      <Nav></Nav>
      <h1 className="font1 bold">
        <a href="https://shiningjustice.github.io" className="resetStyles">Phoebe Law</a>
        <div id="scrollMarker"></div>
      </h1>
    </header>
  );
};