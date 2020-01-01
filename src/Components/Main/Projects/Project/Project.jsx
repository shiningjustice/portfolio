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
      <a href={liveSiteUrl} title="View Live Site" target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={`Screenshot of Phoebe's ${name} project`} className="displayGreyscale"/>
      </a>
      <p>{description}</p>
      <ul className="Project__ul">
        {skillsApplied.map((skill, index) => <li className="bold" key={index}>{skill}</li>)}
      </ul>
      <Button href={liveSiteUrl} target="_blank" rel="noopener noreferrer">View Live</Button>
      {serverRepoUrl ? (
          <>
            <Button href={clientRepoUrl} className="text" target="_blank" rel="noopener noreferrer">View Client Repository</Button>
            <Button href={serverRepoUrl} className="text" target="_blank" rel="noopener noreferrer">View Server Repository</Button>      
          </>
        ) : (
          <Button href={clientRepoUrl} target="_blank" rel="noopener noreferrer">View Repository</Button>
        )
      }
    </div>
  );
};