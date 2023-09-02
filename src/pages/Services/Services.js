import React from 'react'
import Header from '../../components/Header/Header'
import FixedSection from '../../components/FixedSection/FixedSection'
import Footer from '../../components/Footer/Footer'
import './Services.css'
import ServicesContent from '../../components/servicesContent/ServicesContent'
function Services(props) {
  return (
    <div>
      <div className="services-content">
        <div className="for-back-img"></div>
        <Header
          handMadeIcon={props.handMadeIcon}
          handleIcon={props.handleIcon}
        />
        <ServicesContent />
        <FixedSection
          setHandMadeIcon={props.setHandMadeIcon}
          handMadeIcon={props.handMadeIcon}
        />
        <Footer />
      </div>
    </div>
  )
}
export default Services
