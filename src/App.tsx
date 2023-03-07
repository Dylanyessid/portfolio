import { useState } from 'react'
import WebProjects from './sections/WebProjects'
import MobileProjects from './sections/MobileProjects'


function App() {
  return (
    <div>

      <h1>Dylan Yessid López Jaramillo - Portfolio</h1>
      

      <nav className='nav'>
        <a href="">Acerca de mí</a>
        <a href="">Proyectos Escritorio</a>
        <a href="">Proyectos WEB</a>
        <a href="">Proyectos Móvil</a>
      </nav>

      <WebProjects/>
      <MobileProjects/>
    </div>
  )
}

export default App
