import React, { useRef } from 'react'
import firstSectionImg from '../../assets/images/banner_1.0f834e57.png'
import firstSectionImg1 from '../../assets/images/banner_02.3f4ea2a0.png'
import firstSectionImg2 from '../../assets/images/banner_03.d032c081.png'
//import OwlCarousel
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

// Import slick
import Slider from 'react-slick'
//Import CSS
import './HomeContent.css'
//Import img
import secondSectionImg1 from '../../assets/img/second-sec-img1.png'
import secondSectionImg2 from '../../assets/img/second-sec-img2.png'
import secondSectionImg3 from '../../assets/img/second-sec-img3.png'
import thirdSectionImg from '../../assets/img/third-section-img.png'
import fourthSectionIcon from '../../assets/img/fourth-section-icon.png'
import fourthSectionIcon1 from '../../assets/img/fourth-section-icon1.png'
import fourthSectionIcon2 from '../../assets/img/fourth-section-icon2.png'
import fourthSectionIcon3 from '../../assets/img/fourth-section-icon3.png'
import fiveSectionImg from '../../assets/img/five-section-img.jpg'
import fiveSectionImg2 from '../../assets/img/five-section-img2.jpg'
import fiveSectionImg3 from '../../assets/img/fife-section-img3.jpg'
import sexSectionImg from '../../assets/img/download.png'
import sevenSectionImg from '../../assets/img/what-people-say8.jpg'
import sevenSectionImg2 from '../../assets/img/what-people-say4.png'
import sevenSectionImg3 from '../../assets/img/what-people-say6.png'
import eightSectionImg from '../../assets/img/blog_05.webp'
import eightSectionImg2 from '../../assets/img/blog_06.webp'
import eightSectionImg3 from '../../assets/img/blog_09.webp'
import nineSectionImg from '../../assets/img/contact.aed789cf.png'

function HomeContent() {
  const listRef = useRef(null)
  const activeButton = (index) => {
    const array = listRef.current.querySelectorAll('button')

    for (let i = 0; i < array.length; i++) {
      array[i].classList.remove('active-button')
    }
    array[index].classList.add('active-button')
  }
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          lazyLoad: true,
          speed: 500,
        },
      },
      {
        breakpoint: 777,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          lazyLoad: true,
          speed: 500,
        },
      },
    ],
  }
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

  return (
    <div>
      <div className="container ">
        <OwlCarousel
          className="owl-theme first-section-for-slide  "
          loop
          autoplay={true}
          autoplayTimeout={3000}
          autoplaySpeed={1000}
          items={1}
          margin={0}
          lazyLoad={true}
          pagination={{
            clickable: false,
          }}
        >
          <div className="item first-section row">
            <div className="first-section-content col-lg-5">
              <h2 className="text-capitalize">we are creative</h2>
              <h2 className="text-capitalize"> deneb agency</h2>
              <h5 className="text-capitalize">
                we are professional freelance wep designer
              </h5>
              <p>
                Nulla id euismod massa. Donec accumsan semper lacus, vestibulum
                gravida ante sed eu lacus et diam lacinia
              </p>
              <button className="button-hire-us text-uppercase">
                {' '}
                hire us
              </button>
            </div>
            <div className="first-section-img col-lg-7">
              <img src={firstSectionImg} alt="banner img" />
            </div>
          </div>
          <div className="item first-section row">
            <div className="first-section-content col-lg-5">
              <h2 className="text-capitalize">we are creative</h2>
              <h2 className="text-capitalize"> deneb agency</h2>
              <h5 className="text-capitalize">
                we are professional freelance wep designer
              </h5>
              <p>
                Nulla id euismod massa. Donec accumsan semper lacus, <br />
                vestibulum gravida ante sed eu lacus et diam lacinia
              </p>
              <button className="button-hire-us text-uppercase">
                {' '}
                hire us
              </button>
            </div>
            <div className="first-section-img col-lg-7">
              <img src={firstSectionImg1} alt="banner img" />
            </div>
          </div>
          <div className="item first-section row">
            <div className="first-section-content col-lg-5">
              <h2 className="text-capitalize">we are creativzxcxe</h2>
              <h2 className="text-capitalize"> deneb agency</h2>
              <h5 className="text-capitalize">
                we are professional freelance wep designer
              </h5>
              <p>
                Nulla id euismod massa. Donec accumsan semper lacus, <br />
                vestibulum gravida ante sed eu lacus et diam lacinia
              </p>
              <button className="button-hire-us text-uppercase">
                {' '}
                hire us
              </button>
            </div>
            <div className="first-section-img col-lg-7">
              <img src={firstSectionImg2} alt="banner img" />
            </div>
          </div>
        </OwlCarousel>
        <section className="sections-header col-lg-6 col-md-8 col-sm-12">
          <div>
            <h2 className="text-capitalize">our service</h2>
            <p>
              When unknow printer took a gallery of type and scramblted it to
              makea type specimen book
            </p>
          </div>
        </section>
        <section className="second-section row">
          <div className="second-section-content col-lg-4 col-md-6 col-sm-12">
            <div className="second-section-img">
              <img src={secondSectionImg1} />
            </div>
            <h4 className="text-capitalize">Web Solution</h4>
            <p>
              Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
              augue egestas laciniaam eu ornare ipsum, quis tristique ligula.
            </p>
            <a className="text-uppercase">
              <i className="fa-solid fa-play"></i>read more
            </a>
          </div>
          <div className="second-section-content col-lg-4 col-md-6 col-sm-12">
            <div className="second-section-img">
              <img src={secondSectionImg2} />
            </div>
            <h4 className="text-capitalize">Strategy & Research</h4>
            <p>
              Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
              augue egestas laciniaam eu ornare ipsum, quis tristique ligula.
            </p>
            <a className="text-uppercase">
              <i className="fa-solid fa-play"></i>read more
            </a>
          </div>
          <div className="second-section-content col-lg-4 col-md-6 col-sm-12">
            <div className="second-section-img">
              <img src={secondSectionImg3} />
            </div>
            <h4 className="text-capitalize">Web development</h4>
            <p>
              Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
              augue egestas laciniaam eu ornare ipsum, quis tristique ligula.
            </p>
            <a className="text-uppercase">
              <i className="fa-solid fa-play"></i>read more
            </a>
          </div>
        </section>
      </div>
      <section className="third-section">
        <div className="container ">
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
        </div>
      </section>
      <section className=" fourth-section ">
        <div className="container">
          <div className="row ">
            <div className="fourth-section-content  col-lg-6 col-md-12 col-sm-12">
              <h2 className=" text-capitalize">
                Over 500+ Completed work & Still Counting
              </h2>
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Phasellus at orci non risus luctus
                commodo. Ut nibh tellus, faucibus nec gravida.
              </p>
              <p>
                Duis quis ipsum leo. Praesent vitae tellus ac ante porta mattis
                vel non ex. Quisque a finibus justo.
              </p>
            </div>
            <div className="forth-section-items  col-lg-6 col-md-12 col-sm-12">
              <div className="first-two-icon">
                <div className="first-item item">
                  <div className="icon">
                    <img className="icon" src={fourthSectionIcon} />
                  </div>
                  <h3>300+</h3>
                  <p className="text-capitalize">projects done</p>
                </div>
                <div className="third-item mt-5 item">
                  <div className="icon">
                    <img className="icon" src={fourthSectionIcon1} />
                  </div>
                  <h3>200+</h3>
                  <p className="text-capitalize">active projects </p>
                </div>
              </div>

              <div className=" second-two-icon">
                <div className="second-item  item">
                  <div className="icon">
                    <img className="icon" src={fourthSectionIcon2} />
                  </div>
                  <h3>250+</h3>
                  <p className="text-capitalize">projects done</p>
                </div>
                <div className="fourth-item item">
                  <div className="icon">
                    <img className="icon" src={fourthSectionIcon3} />
                  </div>
                  <h3>5+</h3>
                  <p className="text-capitalize">years experiance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sections-header second-section-header m col-lg-6 col-md-8 col-sm-12">
        <div>
          <h2 className="text-capitalize">our latest project</h2>
          <p>
            When unknow printer took a gallery of type and scramblted it to
            makea type specimen book
          </p>
        </div>
      </section>
      <section className="fifth-section">
        <div className="container ">
          <div className="fifth-section-buttoms " ref={listRef}>
            <button
              className="active-button text-uppercase"
              onClick={() => activeButton(0)}
            >
              development
            </button>
            <button className="text-uppercase" onClick={() => activeButton(1)}>
              wep design
            </button>
            <button
              className="text-uppercase third-button"
              onClick={() => activeButton(2)}
            >
              apps development
            </button>
            <button className="text-uppercase " onClick={() => activeButton(3)}>
              markting
            </button>
          </div>
          <Slider className="fifth-section-items" {...settings}>
            <div className="fifth-section-item">
              <div className="fifth-section-img">
                <img src={fiveSectionImg} alt="five-secion-img" />
              </div>
              <div className="fifth-section-content">
                <h4>design & develop</h4>
                <p>design</p>
              </div>
            </div>
            <div className="fifth-section-item">
              <div className="fifth-section-img">
                <img src={fiveSectionImg2} alt="five-secion-img" />
              </div>
              <div className="fifth-section-content">
                <h4>design & develop</h4>
                <p>design</p>
              </div>
            </div>
            <div className="fifth-section-item">
              <div className="fifth-section-img">
                <img src={fiveSectionImg3} alt="five-secion-img" />
              </div>
              <div className="fifth-section-content">
                <h4>design & develop</h4>
                <p>design</p>
              </div>
            </div>
            <div className="fifth-section-item">
              <div className="fifth-section-img">
                <img src={fiveSectionImg2} alt="five-secion-img" />
              </div>
              <div className="fifth-section-content">
                <h4>design & develop</h4>
                <p>design</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

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
      <section className="seven-section">
        <div className="sections-header seven-section-header col-lg-6 col-md-8 col-sm-10">
          <h2 className="text-capitalize">What People Say</h2>
          <p>
            When unknow printer took a gallery of type and scramblted it to make
            a type specimen book
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
                Suspendisse viverra, ante eget pellentesque pulvinar, nunc nisi
                molestie ligula, vitae convallis orci justo vitae sem. Integer
                vitae imperdiet augue, sed accumsan diam. Etiam non quam commodo
                dolor convallis cursus. Duis tempus dolor eget gravida
                fringilla. In ultricies velit eget sem tempus egestas
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
                Suspendisse viverra, ante eget pellentesque pulvinar, nunc nisi
                molestie ligula, vitae convallis orci justo vitae sem. Integer
                vitae imperdiet augue, sed accumsan diam. Etiam non quam commodo
                dolor convallis cursus. Duis tempus dolor eget gravida
                fringilla. In ultricies velit eget sem tempus egestas
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
                Suspendisse viverra, ante eget pellentesque pulvinar, nunc nisi
                molestie ligula, vitae convallis orci justo vitae sem. Integer
                vitae imperdiet augue, sed accumsan diam. Etiam non quam commodo
                dolor convallis cursus. Duis tempus dolor eget gravida
                fringilla. In ultricies velit eget sem tempus egestas
              </p>
            </div>
          </Slider>
        </div>
      </section>
      <section className="container">
        <div className="sections-header eight-section-header col-lg-6 col-md-8 col-sm-12">
          <h2 className="text-capitalize">Latest Blog</h2>
          <p>
            When unknow printer took a gallery of type and scramblted it to make
            a type specimen book
          </p>
        </div>
        <div className="eight-section-blog row ">
          <div className="eight-section-items col-lg-4 col-sm-12">
            <div className="eight-section-img">
              <img src={eightSectionImg3} alt="eight section img" />
            </div>
            <div className="eight-section-content">
              <span className="text-capitalize">july 21,2020</span>
              <h5 className="eight-section-h text-capitalize">
                fitness mantra to live fit life
              </h5>
              <p className="text-capitalize">
                Midst first it, you're multiply divided. There don't, second his
                one given the he one third rule fruit, very. Fill. Seed give
                firmament
              </p>
              <a className="text-uppercase">
                <i className="fa-solid fa-play"></i>read more
              </a>
            </div>
          </div>
          <div className="eight-section-items col-lg-4 col-sm-12">
            <div className="eight-section-img">
              <img src={eightSectionImg} alt="eight section img" />
            </div>
            <div className="eight-section-content">
              <span className="text-capitalize">May 03, 2020</span>
              <h5 className="eight-section-h text-capitalize">
                Beautiful & Special Moment
              </h5>
              <p className="text-capitalize">
                Extremity direction existence as Dashwood's do up. Securing
                Marianne led welcomed offended but offering six raptures.
                Conveying concluded .
              </p>
              <a className="text-uppercase">
                <i className="fa-solid fa-play"></i>read more
              </a>
            </div>
          </div>
          <div className="eight-section-items col-lg-4 col-sm-12">
            <div className="eight-section-img">
              <img src={eightSectionImg2} alt="eight section img" />
            </div>
            <div className="eight-section-content">
              <span className="text-capitalize"> Apr 02, 2020</span>
              <h5 className="eight-section-h text-capitalize">
                Beauti lies within special
              </h5>
              <p className="text-capitalize">
                Extremity direction existence as Dashwood's do up. Securing
                Marianne led welcomed offended but offering six raptures.
                Conveying concluded .
              </p>
              <a className="text-uppercase">
                <i className="fa-solid fa-play"></i>read more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="nine-section">
        <div className="container ">
          <div className="row">
            <div className="nine-section-img col-lg-5 col-md-6 col-sm-8">
              <img src={nineSectionImg} alt="contact img" />
            </div>
            <div className="form-div col-lg-6">
              <div className="sections-header nine-section-header col-lg-6 col-md-6 col-sm-12">
                <h2 className="text-capitalize">Get In Touch With Us</h2>
                <p>
                  When unknow printer took a gallery of type and scramblted it
                  to make a type specimen book
                </p>
              </div>
              <form>
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
                <input type="email" placeholder="your email" />
                <input type="number" placeholder="phone num" />
                <textarea type="message" placeholder="message" />
              </form>
              <button className="sex-section-button button-hire-us text-uppercase ">
                submit now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeContent
