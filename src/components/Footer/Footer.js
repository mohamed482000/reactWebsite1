import React from 'react'
import footerImg from '../../assets/images/download.png'
import './Footer.css'

function Footer() {
  return (
    <div className="container">
      <div className="Footer-content row">
        <div className="Footer-item col-lg-4 col-md-6 col-sm-12">
          <div className="footer-img">
            <img src={footerImg} alt="footer image" />
          </div>
          <p>
            Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi
            est arcu, hendrerit ac vehicula condimentum, euismod nec tortor
            praesent consequat urna.
          </p>
          <div className="footer-icons">
            <span>
              <i className="fa-brands fa-facebook-f"></i>
            </span>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa-brands fa-instagram fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="Footer-item col-lg-4 col-md-6 col-sm-12">
          <h4 className="text-capitalize">essencial links</h4>
          <div className="footer-spans">
            <span className="frist-span"></span>
            <span className="second-span"></span>
            <span className="third-span"></span>
          </div>
          <nav className="footer-links">
            <li>
              <a className="text-capitalize">about us</a>
            </li>
            <li>
              <a className="text-capitalize">services</a>
            </li>
            <li>
              <a className="text-capitalize">portfolio</a>
            </li>
            <li>
              <a className="text-capitalize">bog</a>
            </li>
            <li>
              <a className="text-capitalize">contact us</a>
            </li>
          </nav>
        </div>
        <div className="Footer-item col-lg-4 col-md-6 col-sm-12">
          <h4 className="text-capitalize">Contact Us</h4>
          <div className="footer-spans">
            <span className="frist-span"></span>
            <span className="second-span"></span>
            <span className="third-span"></span>
            <div className="footer-contact">
              <div>
                <i className="fa-solid fa-phone"></i>
                <p>
                  1800-121-3637
                  <br />
                  +91 924-614-7999
                </p>
              </div>
              <div>
                <i className="fa-solid fa-message"></i>
                <p>
                  info@deneb.com
                  <br />
                  services@deneb.com
                </p>
              </div>
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  125, Park street aven, Brocklyn <br />
                  Newyork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
