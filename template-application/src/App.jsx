import React, { useState } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, About, Projects, Contact, Error } from './components'
import "./App.css"

  const App = () => {
    const [activeNavItem , setActiveNavItem] = useState(" ")

    const handleNavItemClick = (navItem) => {
      setActiveNavItem(navItem)
    }
      return (
        <>
        <nav>
        <Link
          to="/"
          onClick={() => handleNavItemClick("Home")}
          className = {`nav-item ${activeNavItem === "Home" ? "active" : "" }`}
          > Home
        </Link>
        <Link
          to="/about"
          onClick={() => handleNavItemClick("About")}
          className = {`nav-item ${activeNavItem === "About" ? "active" : "" }`}
          > About
        </Link>
        <Link
          to="/projects"
          onClick={() => handleNavItemClick("Projects")}
          className = {`nav-item ${activeNavItem === "Projects" ? "active" : "" }`}
          > Projects
        </Link>
        <Link
          to="/contact"
          onClick={() => handleNavItemClick("Contact")}
          className = {`nav-item ${activeNavItem === "Contact" ? "active" : "" }`}
          > Contact
        </Link>
        </nav>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <footer className="sticky-footer">Footer</footer>
        </>
      )
  }

export default App