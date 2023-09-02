import React, { useRef } from 'react'
import './FixedSection.css'
import { NavLink } from 'react-router-dom'

function FixedSection(props) {
  const theSection = useRef()
  const hideTheSection = () => {
    props.setHandMadeIcon(false)
  }
  return (
    <div
      ref={theSection}
      className={props.handMadeIcon ? 'menu-icon-active' : 'menu-icon'}
    >
      <ul>
        <li>
          <NavLink onClick={hideTheSection} to="/" className="text-capitalize">
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={hideTheSection}
            to="/about"
            className="text-capitalize"
          >
            about us
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={hideTheSection}
            to="/services"
            className="text-capitalize"
          >
            services
          </NavLink>
        </li>
        <li>
          <a onClick={hideTheSection} className="text-capitalize">
            portfolio
          </a>
        </li>
        <li className="for-position">
          <a onClick={hideTheSection} className="text-capitalize" href="#">
            blog
          </a>
        </li>
        <li>
          <a onClick={hideTheSection} className="text-capitalize">
            contact us
          </a>
        </li>
        <li>
          <button onClick={hideTheSection} className=" text-uppercase ">
            hire us
          </button>
        </li>
      </ul>
    </div>
  )
}
export default FixedSection
