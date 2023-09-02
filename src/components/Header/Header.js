import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import headerImg from '../../assets/images/download.png'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header(props) {
  const [thatWillReplaceHeader, setThatWillReplaceHeader] = useState(false)
  const [fixedHeader, setFixedHeader] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
      setFixedHeader(true)
      setThatWillReplaceHeader(true)
    } else {
      setFixedHeader(false)
      setThatWillReplaceHeader(false)
    }
  })
  return (
    <div>
      <div className={fixedHeader ? 'real-header' : ''}>
        <div className="container small-container">
          <header className="header-content row">
            <div className="brand col-lg-2">
              <img src={headerImg} alt="header img" />
            </div>
            <div className="header-nav col-lg-10">
              <ul>
                <li>
                  <NavLink to="/" className="text-capitalize">
                    home
                  </NavLink>
                  <span></span>
                </li>
                <li>
                  <NavLink to="/about" className="text-capitalize">
                    about us
                  </NavLink>
                  <span></span>
                </li>
                <li>
                  <NavLink to="/services" className="text-capitalize">
                    services
                  </NavLink>
                  <span></span>
                </li>
                <li>
                  <a className="text-capitalize">portfolio</a>
                  <span></span>
                </li>
                <li className="for-position">
                  <a className="text-capitalize" href="#">
                    blog
                  </a>
                  <span></span>
                  <ul>
                    <li>
                      <a className="text-capitalize" href="#">
                        blog
                      </a>
                    </li>
                    <li>
                      <a className="text-capitalize" href="#">
                        blog details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="text-capitalize">contact us</a>
                  <span></span>
                </li>
                <li>
                  <button className="button-hire-us text-uppercase ">
                    hire us
                  </button>
                </li>
              </ul>
            </div>
            <div
              className={
                props.handMadeIcon
                  ? 'hand-made-nav2 col-lg-10'
                  : 'hand-made-nav  col-lg-10'
              }
              onClick={props.handleIcon}
            >
              <span className="first-span"></span>
              <span className="second-span"></span>
              <span className="third-span"></span>
            </div>
          </header>
        </div>
      </div>
      <div className={thatWillReplaceHeader ? 'replace-the-header' : ''}></div>
    </div>
  )
}

export default Header
