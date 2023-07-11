import React from 'react';
import cashcow from "../images/cashcow.jpg";
import techblog from "../images/techblog-screenshot.jpg";
import scheduler from "../images/scheduler.jpg";
import weather from "../images/weather.jpg";
import anime from "../images/anime.jpg";
import noteTaker from "../images/noteTaker.jpg";

export default function ProjectGrid() {
  const projects = [
    {
      id: 1,
      title: "Ca$hCow",
      description: "personal finance tracker, collaborative",
      image: cashcow,
      liveLink: "https://cash-cow-finance-8e34336f910f.herokuapp.com/",
      githubLink: "https://github.com/ronachen99/personal-finance-tracker",
    },
    {
      id: 2,
      title: "Tyler's Tech Blog",
      description: "made using MVC",
      image: techblog,
      liveLink: "https://desolate-temple-95029-3d9c947e204e.herokuapp.com/",
      githubLink: "https://github.com/jrtvick/mvc-tech-blog",
    },
    {
      id: 3,
      title: "Workday Scheduler",
      description: "local storage know-how",
      image: scheduler,
      liveLink: "https://jrtvick.github.io/work-day-scheduler/",
      githubLink: "https://github.com/jrtvick/work-day-scheduler",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "API know-how",
      image: weather,
      liveLink: "https://jrtvick.github.io/server-side-apis-weather-dashboard/",
      githubLink: "https://github.com/jrtvick/server-side-apis-weather-dashboard",
    },
    {
      id: 5,
      title: "Anime Database",
      description: "API know-how, collaborative",
      image: anime,
      liveLink: " https://rudrijoshi.github.io/Anime-App-Group-Project-1/",
      githubLink: " https://github.com/rudrijoshi/Anime-App-Group-Project-1",
    },
    {
      id: 6,
      title: "Note Taker",
      description: "write it down before you forget",
      image: noteTaker,
      liveLink: "https://note-taker-jrtvick.herokuapp.com/",
      githubLink: "https://github.com/jrtvick/note-taker",
    },
  ];

  return (
    <section>
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <button>Live Site</button>
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button>GitHub Repo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}