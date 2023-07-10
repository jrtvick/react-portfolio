import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div>
      <h1>Tyler Vick</h1>
      <nav>
        <ul>
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header