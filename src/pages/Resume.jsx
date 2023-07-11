import React from "react";

export default function Resume() {
  return (
    <div className="resume-body">
      <h2>
        Online Resume
      </h2>
      <h3 className="resume-download">
        click below to download the <br></br>
        <a href="/assets/tylervickresume.pdf" target="_blank" rel="noopener noreferrer" download>
         .pdf version of my resume
        </a>
      </h3>
      
      <div className="skills">
        <div className="skill-card">
          <h3>Front End Know-How</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>Handlebars</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>CSS Libraries</h3>
          <ul>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>In progress: Tailwind CSS</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Back End Know-How</h3>
          <ul>
            <li>APIs</li>
            <li>Node.Js</li>
            <li>Express</li>
            <li>Apollo Server</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Databases</h3>
          <ul>
            <li>MySQL + Sequelize</li>
            <li>MongoDB + Mongoose</li>
            <li>IndexedDB</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}