import React from 'react'
import './components/css/index'
import Navbar from './components/navbar'
import Icons from './components/Icons'
import Solutions from './components/Solutions'
import Cases from './components/Cases'
import Blog from './components/Blog'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <body id="home">
        <Navbar/>
        <main>
          <Icons/>
          <Solutions/>
          <Cases/>
          <Blog/>
          <Team/>
          <Contact/>
        </main>

      <footer className="footer bg-dark">
        <div className="social">
          <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="#"><i className="fab fa-youtube fa-2x"></i></a>
          <a href="#"><i className="fab fa-linkedin fa-2x"></i></a>
        </div>
        <p>Copyright &copy; 2020 - EdgeLedger</p>
      </footer>

      </body>
    </>
  )
}

export default App