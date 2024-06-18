import React from 'react';
import { useState } from 'react';
import logo from './images/logo.png';

function ServicesPage() {
  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var header = document.querySelector(".main-header");
      if (window.scrollY > 100) { // Adjust the scroll value as needed
        header.classList.add("fixed-nav");
      } else {
        header.classList.remove("fixed-nav");
      }
    });
  });
  

  return (
    <div>
     <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-8">
              <div className="header-top-action">
                <ul>
                  <li><a href="mailto:haneef@carbiamotors.com"><i className="las la-envelope"></i> haneef@carbiamotors.com</a></li>
                  <li><a href="https://wa.me/+919052091234" target="_blank"><i className="lab la-whatsapp"></i> For Appointment & Whatsapp: 9052091234</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-4 text-sm-right">
              <div className="top-call">
                <a href="tel:+447342140790"><i className="las la-clock"></i> Monday-Saturday 9:00AM - 6:00PM</a>
                <a href="#" target="_blank">&nbsp; |&nbsp; <i className="lab la-facebook-f"></i></a>
                <a href="#" target="_blank"> <i className="lab la-linkedin-in"></i></a>
                <a href="#" target="_blank"> <i className="lab la-instagram"></i></a>		
              </div>	
            </div>
          </div>
        </div>
        {/* Top bar content */}
      </div>

      <header className="main-header">
      <div className="container">
          <nav className="navbar navbar-expand-lg p-0 align-items-center">
            <a className="navbar-brand" href="main">
              <div className="logo">
                <img src={logo} alt="Logo" /> {/* Use imported logo */}
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="las la-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav align-items-center">
                <li className="nav-item active">
                  <a className="nav-link" href="main">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="form">
                    FORM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="appointment">
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* Header content */}
      </header>

      <div className="inner-banner">
      <h1>Our Services</h1>
      <img src={require("./images/service-banner.jpg")} alt="" className="img-responsive" />
    </div>

    <div className="inner-page">
      <div className="container">
        {/* First Service Column */}
        <div className="inner-service-col">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <div className="service-pic"><img src={require("./images/service-1.jpg")} className="img-responsive" alt="" /></div>
            </div>
            <div className="col-lg-6">
              <div className="inner-service-text">
                <h2 className="title">Periodic Services</h2>
                <ul>
                  <li>Maintenance Service</li>
                  <li>Car Wash</li>
                  <li>Sunroof Service</li>
                  <li>Wheel Alignment</li>
                  <li>Wheel Balance</li>
                  <li>Type Rotation</li>
                  <li>Other Service</li>
                </ul>
                <a href="appointment" className="common-btn">Book Now</a>
              </div>
            </div>
          </div>
        </div>
        {/* Second Service Column */}
        <div className="inner-service-col">
          <div className="row flex-lg-row-reverse align-items-center">
            <div className="col-lg-6 text-center">
              <div className="service-pic"><img src={require("./images/service-2.jpg")} className="img-responsive" alt="" /></div>
            </div>
            <div className="col-lg-6">
              <div className="inner-service-text">
                <h2 className="title">Repairs & Maintenance</h2>
                <ul>
                  <li>Ac Service & Repair</li>
                  <li>Engine Repair</li>
                  <li>Transmission Repair</li>
                  <li>Clutch Service & Repair</li>
                  <li>Suspension Repair</li>
                  <li>Brake Repair</li>
                  <li>Oil & Coolant Repair</li>
                  <li>Other Repair</li>
                </ul>
                <a href="appointment" className="common-btn">Book Now</a>
              </div>
            </div>
          </div>
        </div>
        {/* Third Service Column */}
        <div className="inner-service-col">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <div className="service-pic"><img src={require("./images/service-3.jpg")} className="img-responsive" alt="" /></div>
            </div>
            <div className="col-lg-6">
              <div className="inner-service-text">
                <h2 className="title">Electrical Repair & Diagnostics</h2>
                <ul>
                  <li>Lights</li>
                  <li>Horn</li>
                  <li>Windshield Wipers</li>
                  <li>Batteries</li>
                  <li>Electrical Diagnostics & Scanning</li>
                  <li>Radiator Fan</li>
                  <li>Others</li>
                </ul>
                <a href="appointment" className="common-btn">Book Now</a>
              </div>
            </div>
          </div>
        </div>
        {/* Fourth Service Column */}
        <div className="inner-service-col">
          <div className="row flex-lg-row-reverse align-items-center">
            <div className="col-lg-6 text-center">
              <div className="service-pic"><img src={require("./images/service-4.jpg")} className="img-responsive" alt="" /></div>
            </div>
            <div className="col-lg-6">
              <div className="inner-service-text">
                <h2 className="title">Denting & Painting</h2>
                <ul>
                  <li>Body Panel Repair & Painting</li>
                  <li>Body Parts</li>
                  <li>Car Denting & Painting</li>
                  <li>Full Painting</li>
                  <li>Others</li>
                </ul>
                <a href="appointment" className="common-btn">Book Now</a>
              </div>
            </div>
          </div>
        </div>
        {/* Fifth Service Column */}
        <div className="inner-service-col">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <div className="service-pic"><img src={require("./images/service-5.jpg")} className="img-responsive" alt="" /></div>
            </div>
            <div className="col-lg-6">
              <div className="inner-service-text">
                <h2 className="title">Car Spa / Detailing</h2>
                <ul>
                  <li>Exterior Rubbing & Polishing</li>
                  <li>Car Interior Wet Shampooing & Detailing</li>
                  <li>Ceramic Coating</li>
                  <li>Teflon Coating</li>
                  <li>Paint Protection Film (PPF)</li>
                  <li>Anti Rust Underbody Coating</li>
                  <li>Others</li>
                </ul>
                <a href="appointment" className="common-btn">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <footer>
      <div className="container">

<div className="footer-appoint-sec">

  <div className="leftfoot-appoint">
    <div className="leftappoint-ico"><img src={require("./images/foot-calender-icon.png")} alt="" /></div>
    <div className="leftappoint-txt"><p>Need a Service Consultation?</p><h4>JUST FILL THE FORM & YOU’RE DONE!</h4></div>
  </div>

  <div className="rightfoot-appoint"><a href="appointment" className="common-btn">Book A Free Consultation</a></div>
</div>

<div className="row">

  <div className="col-lg-4 col-md-4">
    <div className="contact-conten">
    <h3>Contact Info</h3>
      <p><strong><i className="las la-map-marker"></i></strong> <span>PL No. 132 Ranganadha Nagar, Gopanpally, Srilingampally, Hyderabad 500019.</span></p>
      <p><strong><i className="lab la-whatsapp"></i></strong> <a href="https://wa.me/919052091234" target="_blank">FOR APPOINTMENT <br></br>+91 9052091234</a></p>
      <p><strong><i className="las la-phone"></i></strong> <a href="tel:919780429999">+91 9780429999</a>, &nbsp; <a href="tel:919705782222">+91 9705782222</a></p>
      <p><strong><i className="las la-envelope"></i></strong> <a href="mailto:haneef@carbiamotors.com">haneef@carbiamotors.com</a></p>
    </div>

    <div className="footer-social">
      <a href="#" target="_blank"><i className="lab la-facebook-f"></i></a>
      <a href="#" target="_blank"><i className="lab la-instagram"></i></a>
      <a href="#" target="_blank"><i className="lab la-youtube"></i></a>
      <a href="#" target="_blank"><i className="lab la-linkedin-in"></i></a>
    </div>

  </div>

  <div className="col-lg-4 col-md-4 col-sm-6">
    <div className="quicklinks"><h3>Quick Links</h3>

      <div className="quicklinks-cont">
        <p><a href="main">Home</a></p>
        <p><a href="about">About Us</a></p>
        <p><a href="appointment">Book Appointment</a></p>
        <p><a href="https://wa.me/919780429999" target="_blank">Chat With Us</a></p>
        <p><a href="contact">Contact Us</a></p>
      </div>
    </div>

  </div>

  <div className="col-lg-4 col-md-4 col-sm-6">
    <div className="quicklinks"><h3>Carbia SERVICES</h3>

      <div className="quicklinks-cont">
        <p><a href="services">Periodic Services</a></p>
        <p><a href="services">Repairs & Maintenance</a></p>
        <p><a href="services">Electrical Repair & Diagnostics</a></p>
        <p><a href="services">Denting & Painting</a></p>
        <p><a href="services">Car Spa / Detailing</a></p>
      </div>
    </div>

  </div>

</div>
</div>

<div className="copyright"><div className="container"><p>© 2024 Carbia Motors Pvt. Ltd. All Rights Reserved.</p></div></div>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default ServicesPage;
