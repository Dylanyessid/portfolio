import { useState } from 'react'
import WebProjects from './sections/WebProjects'
import MovileProjects from './sections/MovileProjects'


function App() {
  return (
    <div>

      <h1>Dylan Yessid López Jaramillo</h1>
      <h2>Portfolio</h2>

      <nav className='nav'>
        <a href="">Proyectos WEB</a>
        <a href="">Proyectos Móvil</a>
      </nav>

      <WebProjects/>
      <MovileProjects/>
    </div>
  )
}

export default App
