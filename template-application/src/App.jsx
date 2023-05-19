import React, { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import { Home, About, Projects, Contact, Error } from './components'
import "./App.css"

  const App = () => {
      return (
        <>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )
  }

export default App