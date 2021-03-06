// Frameworks
import React from 'react';
// Components
import Button from '../../../Button/Button';
// Styles
import './Project.css'

export default function Project (props) {
  const { name, subtitle, imageUrl, description, skillsApplied, liveSiteUrl, clientRepoUrl, serverRepoUrl } = props.project;

  return (
    <div className="Project">
      <h3>{name}</h3>
      <h4>{subtitle}</h4>
      <div className="Project___flexContainer">
        <a href={liveSiteUrl} title="View Live Site" target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={`Screenshot of Phoebe's ${name} project`} className="Project__img displayGreyscale"/>
        </a>
        <div className="Project___rightColumn">
          <p>{description}</p>
          <ul className="Project__ul">
            {skillsApplied.map((skill, index) => <li className="bold" key={index}>{skill}</li>)}
          </ul>
        </div>
      </div>
      <Button href={liveSiteUrl} target="_blank" rel="noopener noreferrer">View Live</Button>
      {serverRepoUrl ? (
          <>
            <Button href={clientRepoUrl} className="text">View Client Repository</Button>
            <Button href={serverRepoUrl} className="text">View Server Repository</Button>      
          </>
        ) : (
          <Button href={clientRepoUrl}>View Repository</Button>
        )
      }
    </div>
  );
};