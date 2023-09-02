import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './ServicesContent.css'
import sec1ServicesImg from '../../assets/img/second-sec-img1.png'
import sec1ServicesImg2 from '../../assets/img/second-sec-img2.png'
import sec1ServicesImg3 from '../../assets/img/second-sec-img3.png'
import sec1ServicesImg4 from '../../assets/img/second-sec-img4.png'
import sec1ServicesImg5 from '../../assets/img/second-sec-img5.png'
import sec1ServicesImg6 from '../../assets/img/second-sec-img6.png'
import thirdSectionServices from '../../assets/img/third-section-services-img0.jpg'
import thirdSectionServices2 from '../../assets/img/third-section-services-img1.jpg'
import thirdSectionServices3 from '../../assets/img/third-section-services-img.jpg'
import thirdSectionServices4 from '../../assets/img/third-section-services-img3.jpg'
import thirdSectionServices5 from '../../assets/img/third-section-services-img4.jpg'
import thirdSectionServices6 from '../../assets/img/06.jpg'
import iconServices from '../../assets/img/icon_services-17.png'
import iconServices2 from '../../assets/img/icon_services-18.png'
import iconServices3 from '../../assets/img/icon_services-19.png'
import FourthSectionServices from '../../assets/img/service_1.png'
import FourthSectionServices2 from '../../assets/img/service_2.png'
import FourthSectionServices3 from '../../assets/img/service_3.png'
import sexSectionImg from '../../assets/img/download.png'

function ServicesContent() {
  const secondServicesSectionItems = useRef()
  const secondServicesSectionContents = useRef()
  const addAndRemoveBorder = (index) => {
    const everyAray = secondServicesSectionItems.current.querySelectorAll(
      '.secsection-services-item',
    )
    const everyAray1 = secondServicesSectionContents.current.querySelectorAll(
      '.second-section-services-content',
    )
    for (let i = 0; i < everyAray.length; i++) {
      everyAray[i].classList.remove('secsection-services-active-item')
      everyAray1[i].classList.add('display-none')
      everyAray1[i].classList.add('opacity-0')
    }
    everyAray[index].classList.add('secsection-services-active-item')
    everyAray1[index].classList.remove('display-none')
    setTimeout(() => {
      everyAray1[index].classList.remove('opacity-0')
    }, 150)
  }
  return (
    <div>
      <div className="container">
        <section className="first-section-about">
          <h1 className="text-capitalize">our services</h1>
          <div>
            <NavLink className="text-uppercase" to="/">
              home
            </NavLink>
            <i className="fa-solid fa-chevron-right"></i>
            <span className="text-uppercase">our services </span>
          </div>
        </section>
        <section className="second-section-services ">
          <div
            ref={secondServicesSectionItems}
            className="second-section-services-items row"
          >
            <div
              onClick={() => addAndRemoveBorder(0)}
              className="secsection-services-item secsection-services-active-item col-lg-2 col-md-4 col-sm-6"
            >
              <div className="second-section-img">
                <img src={sec1ServicesImg} />
              </div>
              <p>Web Solution</p>
            </div>
            <div
              onClick={() => addAndRemoveBorder(1)}
              className="secsection-services-item col-lg-2 col-md-4"
            >
              <div className="second-section-img">
                <img src={sec1ServicesImg2} />
              </div>
              <p>Strategy & Research</p>
            </div>
            <div
              onClick={() => addAndRemoveBorder(2)}
              className="secsection-services-item col-lg-2 col-md-4"
            >
              <div className="second-section-img">
                <img src={sec1ServicesImg3} />
              </div>
              <p>Web Development</p>
            </div>
            <div
              onClick={() => addAndRemoveBorder(3)}
              className="secsection-services-item col-lg-2 col-md-4"
            >
              <div className="second-section-img">
                <img src={sec1ServicesImg4} />
              </div>
              <p>App Design</p>
            </div>
            <div
              onClick={() => addAndRemoveBorder(4)}
              className="secsection-services-item col-lg-2 col-md-4"
            >
              <div className="second-section-img">
                <img src={sec1ServicesImg5} />
              </div>
              <p>Digital Marketing</p>
            </div>
            <div
              onClick={() => addAndRemoveBorder(5)}
              className="secsection-services-item col-lg-2 col-md-4"
            >
              <div className="second-section-img">
                <img src={sec1ServicesImg6} />
              </div>
              <p>Business Analysis</p>
            </div>
          </div>
          <div ref={secondServicesSectionContents} className=" ">
            <div className="second-section-services-content  row">
              <div className="second-section-services-contentt col-lg-6 col-md-8 col-sm-12">
                <h2 className=" text-capitalize">web solution</h2>
                <p>
                  Etiam suscipit sed sem nec elementum. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel
                  finibus sollicitudin, urna sem fringilla nisi.
                </p>
                <p>
                  In vel ante tristique, blandit nisi in, feugiat nisl. Nunc
                  sagittis pretium arcu, ac consectetur diam feugiat vitae.
                  Pellentesque sit amet elit facilisis, sodales nisl non, luctus
                  ex. Donec molestie consequat velit, id imperdiet arcu
                  sollicitudin.
                </p>
                <p>
                  Praesent ac tempus ipsum, eget consequat ante. Sed consequat,
                  elit euismod finibus faucibus.
                </p>
              </div>
              <div className="second-section-services-img col-lg-6 col-md-4 col-sm-12">
                <div className="for-position-absilute"></div>
                <img src={thirdSectionServices} />
              </div>
            </div>
            <div className="second-section-services-content display-none row">
              <div className="second-section-services-contentt col-lg-6 col-md-8 col-sm-12">
                <h2 className=" text-capitalize">Strategy & Research</h2>
                <p>
                  Etiam suscipit sed sem nec elementum. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel
                  finibus sollicitudin, urna sem fringilla nisi.
                </p>
                <p>
                  In vel ante tristique, blandit nisi in, feugiat nisl. Nunc
                  sagittis pretium arcu, ac consectetur diam feugiat vitae.
                  Pellentesque sit amet elit facilisis, sodales nisl non, luctus
                  ex. Donec molestie consequat velit, id imperdiet arcu
                  sollicitudin.
                </p>
                <p>
                  Praesent ac tempus ipsum, eget consequat ante. Sed consequat,
                  elit euismod finibus faucibus.
                </p>
              </div>
              <div className="second-section-services-img col-lg-6 col-md-4 col-sm-12">
                <div></div>
                <img src={thirdSectionServices2} />
              </div>
            </div>
            <div className="second-section-services-content display-none row">
              <div className="second-section-services-contentt col-lg-6 col-md-8 col-sm-12">
                <h2 className=" text-capitalize">Web Development</h2>
                <p>
                  Etiam suscipit sed sem nec elementum. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel
                  finibus sollicitudin, urna sem fringilla nisi.
                </p>
                <p>
                  In vel ante tristique, blandit nisi in, feugiat nisl. Nunc
                  sagittis pretium arcu, ac consectetur diam feugiat vitae.
                  Pellentesque sit amet elit facilisis, sodales nisl non, luctus
                  ex. Donec molestie consequat velit, id imperdiet arcu
                  sollicitudin.
                </p>
                <p>
                  Praesent ac tempus ipsum, eget consequat ante. Sed consequat,
                  elit euismod finibus faucibus.
                </p>
              </div>
              <div className="second-section-services-img col-lg-6 col-md-4 col-sm-12">
                <div></div>
                <img src={thirdSectionServices3} />
              </div>
            </div>
            <div className="second-section-services-content row display-none">
              <div className="second-section-services-contentt col-lg-6 col-md-8 col-sm-12">
                <h2 className=" text-capitalize">App Design</h2>
                <p>
                  Etiam suscipit sed sem nec elementum. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel
                  finibus sollicitudin, urna sem fringilla nisi.
                </p>
                <p>
                  In vel ante tristique, blandit nisi in, feugiat nisl. Nunc
                  sagittis pretium arcu, ac consectetur diam feugiat vitae.
                  Pellentesque sit amet elit facilisis, sodales nisl non, luctus
                  ex. Donec molestie consequat velit, id imperdiet arcu
                  sollicitudin.
                </p>
                <p>
                  Praesent ac tempus ipsum, eget consequat ante. Sed consequat,
                  elit euismod finibus faucibus.
                </p>
              </div>
              <div className="second-section-services-img col-lg-6 col-md-4 col-sm-12">
                <div></div>
                <img src={thirdSectionServices4} />
              </div>
            </div>
            <div className="second-section-services-content row display-none">
              <div className="second-section-services-contentt col-lg-6 col-md-8 col-sm-12">
                <h2 className=" text-capitalize">Digital Marketing</h2>
                <p>
                  Etiam suscipit sed sem nec elementum. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel
                  finibus sollicitudin, urna sem fringilla nisi.
                </p>
                <p>
                  In vel ante tristique, blandit nisi in, feugiat nisl. Nunc
                  sagittis pretium arcu, ac consectetur diam feugiat vitae.
                  Pellentesque sit amet elit facilisis, sodales nisl non, luctus
                  ex. Donec molestie consequat velit, id imperdiet arcu
                  sollicitudin.
                </p>
                <p>
                  Praesent ac tempus ipsum, eget consequat ante. Sed consequat,
                  elit euismod finibus faucibus.
                </p>
              </div>
              <div className="second-section-services-img col-lg-6 col-md-4 col-sm-12">
                <div></div>
                <img src={thirdSectionServices5} />
              </div>
            </div>
            <div className="second-section-services-content row display-none">
              <div className="second-section-services-contentt col-lg-6 col-md-8 col-sm-12">
                <h2 className=" text-capitalize">Business Analysis</h2>
                <p>
                  Etiam suscipit sed sem nec elementum. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel
                  finibus sollicitudin, urna sem fringilla nisi.
                </p>
                <p>
                  In vel ante tristique, blandit nisi in, feugiat nisl. Nunc
                  sagittis pretium arcu, ac consectetur diam feugiat vitae.
                  Pellentesque sit amet elit facilisis, sodales nisl non, luctus
                  ex. Donec molestie consequat velit, id imperdiet arcu
                  sollicitudin.
                </p>
                <p>
                  Praesent ac tempus ipsum, eget consequat ante. Sed consequat,
                  elit euismod finibus faucibus.
                </p>
              </div>
              <div className="second-section-services-img col-lg-6 col-md-4 col-sm-12">
                <div></div>
                <img src={thirdSectionServices6} />
              </div>
            </div>
          </div>
        </section>
        <section className="third-section-services">
          <div className="sections-header third-section-services-header  col-lg-6 col-md-8 col-sm-12">
            <h2 className="text-capitalize">Our Work Flow</h2>
            <p>
              When unknow printer took a gallery of type and scramblted it to
              make a type specimen book
            </p>
          </div>
          <div className="third-section-services-items row">
            <div className="third-section-services-img col-lg-6 col-md-6 col-sm-12">
              <img src={FourthSectionServices} />
            </div>
            <div className="third-section-services-content col-lg-6 col-md-6 col-sm-12">
              <div>
                <img src={iconServices} />
              </div>
              <h2>Analysis</h2>
              <p>
                Morbi vel tortor at metus malesuada convallis. Nam diam magna,
                laoreet ac libero quis, laoreet semper sem. Etiam erat quam,
                suscipit in orci ut, aliquet finibus tortor. Nullam dui leo,
                convallis quis diam eget, aliquam feugiat nunc. Vivamus quis
                volutpat dui.
              </p>
            </div>
          </div>
          <div className="third-section-services-items row">
            <div className="third-section-services-img col-lg-6 col-md-6 col-sm-12">
              <img src={FourthSectionServices2} />
            </div>
            <div className="third-section-services-content col-lg-6 col-md-6 col-sm-12">
              <div>
                <img src={iconServices2} />
              </div>
              <h2>Development</h2>
              <p>
                Morbi vel tortor at metus malesuada convallis. Nam diam magna,
                laoreet ac libero quis, laoreet semper sem. Etiam erat quam,
                suscipit in orci ut, aliquet finibus tortor. Nullam dui leo,
                convallis quis diam eget, aliquam feugiat nunc. Vivamus quis
                volutpat dui.
              </p>
            </div>
          </div>
          <div className="third-section-services-items row">
            <div className="third-section-services-img col-lg-6 col-md-6 col-sm-12">
              <img src={FourthSectionServices3} />
            </div>
            <div className="third-section-services-content col-lg-6 col-md-6 col-sm-12">
              <div>
                <img src={iconServices3} />
              </div>
              <h2>Launch</h2>
              <p>
                Morbi vel tortor at metus malesuada convallis. Nam diam magna,
                laoreet ac libero quis, laoreet semper sem. Etiam erat quam,
                suscipit in orci ut, aliquet finibus tortor. Nullam dui leo,
                convallis quis diam eget, aliquam feugiat nunc. Vivamus quis
                volutpat dui.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className=" sex-section">
        <div className="container">
          <div className="sections-header second-section-header col-lg-6 col-md-8 col-sm-12">
            <h2 className="text-capitalize">Afforable Pricing</h2>
            <p>
              When unknow printer took a gallery of type and scramblted it to
              make a type specimen book
            </p>
          </div>
          <div className="row">
            <div className="sex-section-item col-lg-4 col-md-6 col-sm-12">
              <div className="sex-section-img">
                <img src={sexSectionImg} alt="sex section img" />
              </div>
              <h3 className="sex-section-h text-capitalize">basic</h3>
              <p className="text-capitalize">graphic design</p>
              <p className="text-capitalize">wep design</p>
              <del className="text-uppercase">ui/ux</del>
              <br />
              <del className="text-uppercase">html/css</del>
              <br />
              <del className="text-uppercase">
                seo <span className="text-capitalize">markting</span>
              </del>
              <br />
              <del className="text-capitalize">Business Analysis</del>
              <p className="month-pargraph text-capitalize">
                $ 44 <span className="text-capitalize">/ month</span>
              </p>
              <button className="sex-section-button button-hire-us text-uppercase ">
                start now
              </button>
            </div>
            <div className="sex-section-item col-lg-4 col-md-6 col-sm-12">
              <div className="sex-section-img">
                <img src={sexSectionImg} alt="sex section img" />
              </div>
              <h3 className="sex-section-h text-capitalize">standard</h3>
              <p className="text-capitalize">graphic design</p>
              <p className="text-capitalize">wep design</p>
              <p className="text-uppercase">ui/ux</p>
              <p className="text-uppercase">html/css</p>
              <p className="text-uppercase">
                seo <span className="text-capitalize">markting</span>
              </p>
              <p className="text-capitalize">Business Analysis</p>
              <p className="month-pargraph text-capitalize">
                $ 94 <span className="text-capitalize">/ month</span>
              </p>
              <button className="sex-section-button button-hire-us text-uppercase ">
                start now
              </button>
            </div>
            <div className="sex-section-item col-lg-4 col-md-6 col-sm-12">
              <div className="sex-section-img">
                <img src={sexSectionImg} alt="sex section img" />
              </div>
              <h3 className="sex-section-h text-capitalize">premium</h3>
              <p className="text-capitalize">graphic design</p>
              <p className="text-capitalize">wep design</p>
              <p className="text-uppercase">ui/ux</p>
              <p className="text-uppercase">html/css</p>
              <p className="text-uppercase">
                seo <span className="text-capitalize">markting</span>
              </p>
              <p className="text-capitalize">Business Analysis</p>
              <p className="month-pargraph text-capitalize">
                $ 75 <span className="text-capitalize">/ month</span>
              </p>
              <button className="sex-section-button button-hire-us text-uppercase ">
                start now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ServicesContent
