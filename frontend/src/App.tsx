import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home'
// import About from './components/About';
// import Timeline from './components/Timeline';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
{
  /*
  Navbar:
    -> full name top left corner (Jules T. Fagard)
    -> top right: Download Resumé | About, Timeline, Projects

  Home:
    -> Hi, name, profession on the left
    -> under that: linkeding, github, twitter
    -> to the right: picture (drawing of me, when hovering switches to real picture)

  About:
    -> About
    -> title (I'm a passionate developer)
    -> life
    -> skills (tags of technologies I know and use)

  Timeline:
    -> a visual timeline of my life:
      -> born, studied, started learning languages...

  Projects:
    -> "Things I've worked on"
    -> carousel of projects
      -> cards:
        -> image
        -> title
        -> tags of tech used
        -> small description
        -> code button and live demo button if applicable
      -> below that left and right arrow buttons to "select" left/right project
      -> when clicking on a un-selected project, selects it

  Contact:
    -> Form with: name, email, message
    -> on bottom form: linkeding, github, twitter, and email

  Footer:
    -> About, Timeline, Projects
    -> copyright + code
    -> return to top button
  */
}

function App() {
  return (
    <div className="bg-white dark:bg-slate-800">
      <Navbar />
      <Home />
      {/* <About />
      <Timeline />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
