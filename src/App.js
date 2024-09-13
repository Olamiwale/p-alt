import React from 'react'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Contact from './pages/Contact'


export default function App() {
  return (
    <div>
      <Header />
      <div>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />

      </div>
    
    </div>
  )
}
