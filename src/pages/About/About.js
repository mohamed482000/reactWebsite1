import React from 'react'
import Header from '../../components/Header/Header'
import FixedSection from '../../components/FixedSection/FixedSection'
import Footer from '../../components/Footer/Footer'
import './About.css'
import AboutContent from '../../components/AboutContent/AboutContent'
function About(props) {
  return (
    <div>
      <div className="about-content">
        <div className="for-back-img"></div>
        <Header
          handMadeIcon={props.handMadeIcon}
          handleIcon={props.handleIcon}
        />
        <FixedSection
          setHandMadeIcon={props.setHandMadeIcon}
          handMadeIcon={props.handMadeIcon}
        />
        <AboutContent />
        <Footer />
      </div>
    </div>
  )
}
export default About
