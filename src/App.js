import React from 'react'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Experience from './components/Experience'
import NavigationBar from './components/NavigationBar'

const App = () => {
  return (
    <div>
        <NavigationBar />
        <AboutMe />
        <Education />
        <Experience />
    </div>
  )
}

export default App