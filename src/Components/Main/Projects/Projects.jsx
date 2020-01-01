// Frameworks
import React from 'react';
// Components
import Project from './Project/Project';
// Helpers
import dataStore from '../../../helpers/DataStore/dataStore';
// Styles
import './Projects.css';

export default function Projects (props) {
  return (
    <section id="Projects" className={`Projects ${props.inheritedClassName}`}>
      <h2>Projects</h2>
      {dataStore.projects.map((project, index) => <Project key={index} project={project} />)}
    </section>
  );
};