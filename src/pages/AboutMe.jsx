import { useEffect, useRef, useState } from "react";
import picOfMe from "../images/picOfMe.jpeg";
import "../components/aboutme/aboutme.css";

export default function AboutMe() {
  return (
    <section>
      <div className="about-me-content">
        <div className="about-card">
          <img src={picOfMe} />
        </div>
        <div className="bio-text about-card">
          <h1>About</h1>
          <p>
          My name is Tyler Vick. I am 32 years old and I live in Toronto, ON. I started my coding career with a fullstack bootcamp in 2023 and I am continuing to grow my knowledge every day!
<br></br>
<br></br>
          Outside of web development, I like to spend my time reading, watching movies, cheering on the Detroit Red Wings, and playing '90s JRPGs.
          </p>
        </div>
      </div>
    </section>
  );
}
