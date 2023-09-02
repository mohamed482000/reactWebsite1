import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './AboutContent.css'
import Slider from 'react-slick'
import thirdSectionImg from '../../assets/img/third-section-img.png'
import skillSecInAboutImg from '../../assets/img/skill.png'
import sevenSectionImg from '../../assets/img/what-people-say8.jpg'
import sevenSectionImg2 from '../../assets/img/what-people-say4.png'
import sevenSectionImg3 from '../../assets/img/what-people-say6.png'

function AboutContent() {
  const settingss = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }
  const [reachBrogressDiv, setReachBrogressDiv] = useState(false)
  const [reachBrogressDiv1, setReachBrogressDiv1] = useState(false)
  const [reachBrogressDiv2, setReachBrogressDiv2] = useState(false)
  const [reachBrogressDi3, setReachBrogressDiv3] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 900) {
      setReachBrogressDiv(true)
    }
    if (window.scrollY > 1000) {
      setReachBrogressDiv1(true)
    }
    if (window.scrollY > 1080) {
      setReachBrogressDiv2(true)
    }
    if (window.scrollY > 1150) {
      setReachBrogressDiv3(true)
    }
  })

  return (
    <div>
      <div className="container">
        <section className="first-section-about">
          <h1 className="text-capitalize">about me</h1>
          <div>
            <NavLink className="text-uppercase" to="/">
              home
            </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
            <span className="text-uppercase">about me </span>
          </div>
        </section>
        <section className="third-section">
          <div className="row">
            <div className="third-section-img col-lg-5 col-md-4 col-sm-12">
              <img src={thirdSectionImg} />
            </div>
            <div className="third-section-content col-lg-7 col-md-8 col-sm-12">
              <h2 className=" text-capitalize">why you hire us?</h2>
              <p>
                Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget
                magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie
                non ex sit amet ornare. Nunc in pellentesque ipsum, vel
                vulputate sapien.
              </p>
              <p>
                Suspendisse potenti. Aliquam elementum felis purus, quis
                vulputate libero semper nec. Morbi tincidunt maximus nisl vel
                placerat. Curabitur at ligula ac diam elementum hendrerit.
                Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum.
                Nam faucibus elementum arcu, eget eleifend tortor.
              </p>
              <button className="button-hire-us text-uppercase ">
                read more
              </button>
            </div>
          </div>
        </section>
        <section className="second-about-section row">
          <div className="about-second-section-content col-lg-7 col-md-8 col-sm-12">
            <h2 className=" text-capitalize">Let Know Our Expert Skills</h2>
            <p>
              Curabitur libero eros, efficitur sit amet sodales tincidunt,
              aliquet et leo. Sed ut nibh feugiat, auctor enim quis, hendrerit
              ipsum. Aenean blandit lacinia suscipit. Nunc ut tincidunt massa,
              eu semper lacus.
            </p>
            <div className="bars">
              <li>
                <div>
                  <h4> UI/UX Design</h4>
                  <span>85%</span>
                </div>
                <span className="bar ">
                  <span
                    className={
                      reachBrogressDiv ? 'prog proginimation ' : 'prog '
                    }
                  >
                    <span></span>
                  </span>
                </span>
              </li>
              <li>
                <div>
                  <h4> Web Design</h4>
                  <span>75%</span>
                </div>
                <span className="bar ">
                  <span
                    className={
                      reachBrogressDiv1 ? 'prog proginimation1 ' : 'prog '
                    }
                  >
                    <span></span>
                  </span>
                </span>
              </li>
              <li>
                <div>
                  <h4> HTML/CSS</h4>
                  <span>90%</span>
                </div>
                <span className="bar ">
                  <span
                    className={
                      reachBrogressDiv2 ? 'prog proginimation2 ' : 'prog '
                    }
                  >
                    <span></span>
                  </span>
                </span>
              </li>
              <li>
                <div>
                  <h4> Sketch65</h4>
                  <span>65%</span>
                </div>
                <span className="bar ">
                  <span
                    className={
                      reachBrogressDi3 ? 'prog proginimation3 ' : 'prog '
                    }
                  >
                    <span></span>
                  </span>
                </span>
              </li>
            </div>
          </div>
          <div className="about-second-section-img col-lg-5 col-md-4 col-sm-12">
            <img src={skillSecInAboutImg} />
          </div>
        </section>
        <section className="seven-section">
          <div className="sections-header seven-section-header col-lg-6 col-md-8 col-sm-10">
            <h2 className="text-capitalize">What People Say</h2>
            <p>
              When unknow printer took a gallery of type and scramblted it to
              make a type specimen book
            </p>
          </div>

          <div className="what-people-say-section">
            <div className="what-people-say"></div>
            <Slider className="slide" {...settingss}>
              <div>
                <div className="center-img">
                  <div className="icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <img src={sevenSectionImg} />
                </div>
                <h3 className="text-capitalize">john doe</h3>
                <span className="text-capitalize">freelancer UX designer</span>
                <p>
                  Donec condimentum vehicula iaculis. Maecenas in aliquet neque.
                  Suspendisse viverra, ante eget pellentesque pulvinar, nunc
                  nisi molestie ligula, vitae convallis orci justo vitae sem.
                  Integer vitae imperdiet augue, sed accumsan diam. Etiam non
                  quam commodo dolor convallis cursus. Duis tempus dolor eget
                  gravida fringilla. In ultricies velit eget sem tempus egestas
                </p>
              </div>
              <div>
                <div className="center-img">
                  <div className="icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <img src={sevenSectionImg2} />
                </div>
                <h3 className="text-capitalize">john doe</h3>
                <span className="text-capitalize">freelancer UX designer</span>
                <p>
                  Donec condimentum vehicula iaculis. Maecenas in aliquet neque.
                  Suspendisse viverra, ante eget pellentesque pulvinar, nunc
                  nisi molestie ligula, vitae convallis orci justo vitae sem.
                  Integer vitae imperdiet augue, sed accumsan diam. Etiam non
                  quam commodo dolor convallis cursus. Duis tempus dolor eget
                  gravida fringilla. In ultricies velit eget sem tempus egestas
                </p>
              </div>
              <div>
                <div className="center-img">
                  <div className="icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <img src={sevenSectionImg3} />
                </div>
                <h3 className="text-capitalize">john doe</h3>
                <span className="text-capitalize">freelancer UX designer</span>
                <p>
                  Donec condimentum vehicula iaculis. Maecenas in aliquet neque.
                  Suspendisse viverra, ante eget pellentesque pulvinar, nunc
                  nisi molestie ligula, vitae convallis orci justo vitae sem.
                  Integer vitae imperdiet augue, sed accumsan diam. Etiam non
                  quam commodo dolor convallis cursus. Duis tempus dolor eget
                  gravida fringilla. In ultricies velit eget sem tempus egestas
                </p>
              </div>
            </Slider>
          </div>
        </section>
      </div>
    </div>
  )
}
export default AboutContent
