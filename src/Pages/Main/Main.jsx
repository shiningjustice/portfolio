// Frameworks
import React from 'react';
import { Route } from 'react-router-dom';

// Components 
import Home from '../../Components/Home/Home';
import ReadingPlan from '../../Components/ReadingPlan';
import CodingChallenge from '../../Components/CodingChallenge';

// Styles
import './Main.css';

export default function Main () {

  const routes = [
    { path: '/', name: 'home', Component: Home },
    { path: '/reading-plan', name: 'readingplan', Component: ReadingPlan }, 
    { path: '/100days', name: '100days', Component: CodingChallenge }
  ];

  return (
    <main role="main" className="Main">
      {routes.map(({ path, Component }) => 
        <Route key={path} exact path={path} component={Component} />
      )}
    </main>
  );
};