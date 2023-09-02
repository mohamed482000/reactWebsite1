import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/Header/Header'
import FixedSection from '../../components/FixedSection/FixedSection'
import './Home.css'
import HomeContent from '../../components/HomeContent/HomeContent'
import Footer from '../../components/Footer/Footer'
function Home(props) {
  return (
    <div>
      <Header handMadeIcon={props.handMadeIcon} handleIcon={props.handleIcon} />
      <FixedSection
        setHandMadeIcon={props.setHandMadeIcon}
        handMadeIcon={props.handMadeIcon}
      />
      <HomeContent />
      <Footer />
    </div>
  )
}
export default Home
