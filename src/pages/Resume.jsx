import React from "react";
import resume from "../images/tylervickresume.pdf"
import "../components/resume/resume.css";

export default function Resume() {
  return (
    <div className="resume-body">
      <div className="title-bg">
      <h1 className="resume-header">
        Online Resume
      </h1>
      </div>
      <h2 className="resume-download">
        <a href={resume} target="_blank" rel="noreferrer">
        .pdf version of my resume </a>
      </h2>
      
      <div className="skills">
        <div className="skill-card">
          <h2>Front End Know-How</h2>
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
          <h2>CSS Libraries</h2>
          <ul>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>In progress: Tailwind CSS</li>
          </ul>
        </div>
        <div className="skill-card">
          <h2>Back End Know-How</h2>
          <ul>
            <li>APIs</li>
            <li>Node.Js</li>
            <li>Express</li>
            <li>Apollo Server</li>
          </ul>
        </div>
        <div className="skill-card">
          <h2>Databases</h2>
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