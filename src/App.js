import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Services from './pages/Services/Services'
function App() {
  const [handMadeIcon, setHandMadeIcon] = useState(false)
  const [scroll, setScroll] = useState()
  const handleIcon = () => {
    setHandMadeIcon(!handMadeIcon)
  }
  const hideTheSection = () => {
    setHandMadeIcon(false)
  }
  window.addEventListener('scroll', hideTheSection)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScroll(window.innerWidth)
      if (scroll > 911) {
        setHandMadeIcon(false)
      } else {
        setHandMadeIcon(false)
      }
    })
  })
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            exact
            element={
              <Home
                setHandMadeIcon={setHandMadeIcon}
                handMadeIcon={handMadeIcon}
                handleIcon={handleIcon}
              />
            }
          />
          <Route
            path="/about"
            exact
            element={
              <About
                setHandMadeIcon={setHandMadeIcon}
                handMadeIcon={handMadeIcon}
                handleIcon={handleIcon}
              />
            }
          />
          <Route
            path="/services"
            exact
            element={
              <Services
                setHandMadeIcon={setHandMadeIcon}
                handMadeIcon={handMadeIcon}
                handleIcon={handleIcon}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
