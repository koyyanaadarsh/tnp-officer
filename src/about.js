import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/TestimonialSlider.css';
import './custom.css'

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleLinkClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".main-header");
      if (window.scrollY > 100) {
        header.classList.add("fixed-nav");
      } else {
        header.classList.remove("fixed-nav");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  const testimonials = [
    {
      img: require('./images/quote-icon.png'),
      quote: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Phasellus ultricies velit vel mifeugiat, ac feugiat eros suscipit.Vivamuc vehicula placerat sedquis nulla. ",
      name: "Adarsh Koyyana"
    },
    {
      img: require('./images/quote-icon.png'),
      quote: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Phasellus ultricies velit vel mifeugiat, ac feugiat eros suscipit.Vivamuc vehicula placerat sedquis nulla.",
      name: "Sumit Saini"
    },
    {
      img: require('./images/quote-icon.png'),
      quote: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Phasellus ultricies velit vel mifeugiat, ac feugiat eros suscipit.Vivamuc vehicula placerat sedquis nulla.",
      name: "Rakesh Kumar"
    },
    {
      img: require('./images/quote-icon.png'),
      quote: " Lorem ipsum dolor sit amet,consectetur adipiscing elit.Phasellus ultricies velit vel mifeugiat, ac feugiat eros suscipit.Vivamuc vehicula placerat sedquis nulla.",
      name: "Harsh Pathak"
    }
  ];

  return (
    <div>
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-8">
              <div className="header-top-action">
                <ul>
                  <li><a href="mailto:tnpofficer@gmail.com"><i className="las la-envelope"></i> tnpofficer.com</a></li>
                  <li><a href="https://wa.me/+919492470504" target="_blank"><i className="lab la-whatsapp"></i> For Placements & Whatsapp: 9492470504</a></li>
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
      </div>

      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0 align-items-center">
            <a className="navbar-brand" href="index">
              <div className="logo"><img src={logo} alt="" /></div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="las la-bars "></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item active"><a className="nav-link" href="main">HOME</a></li><li className="nav-item">
                  <a className="nav-link" href="about">
                    Internships
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services">
                  Mock Tests
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact">
                  Learning
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about">
                   About
                  </a>
                </li>
                
                <li className="nav-item"><a className="nav-link" href="appointment">Get Start</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div>
        <div className="inner-banner">
          <h1>About Us</h1>
          <img src={require("./images/tnp1.webp")} alt="" className="img-responsive" />
        </div>

        <div className="inner-page">
          <div className="container">
            <div className="row align-items-center pd100">
              <div className="col-lg-6">
                <div className="about_img scene mb-4 mb-lg-0">
                  <img src={require("./images/tnp1.webp")} alt="" className="img-responsive" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="who-text">
                  <div className="heading_s1">
                    <h2 className="title">About </h2>
                  </div>
                  <p>Welcome to the TNP Officer. We are working towards the Employability of the youth.

Tnpofficer.com is  one of the fastest-growing websites in India. We help the Freshers- recent graduates/ postgraduates (Entry Level) to find their first job. We cover various topics and talks related to Training/ Preparations for the final placements of the freshers.

TNP officer provides the free job alerts to the freshers and experienced candidates. We share the information about various latest and upcoming recruitment drives for freshers like On campus recruitment drive, Off campus drive for freshers, Off campus hiring for freshers, Pool Campus drives and hiring, Walk-ins, Job fairs, and Internship drives etc.</p>
                </div>
              </div>
            </div>

            <div className="row align-items-center flex-lg-row-reverse mt-7">
              <div className="col-lg-6">
                <div className="about_img scene mb-4 mb-lg-0">
                  <img src={require("./images/tnp2.webp")} alt="" className="img-responsive" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="who-text">
                  <div className="heading_s1">
                    <h2 className="title">Tips for interviews</h2>
                  </div>
                  <p>Before appearing for an interview, do thorough research on the company’s profile. The Interviewer may ask you questions about their company to check your knowledge and interest in the company. Research the following points before appearing at an interview. </p>
                </div>
              </div>
            </div>

            <div className="about-team">
              <div className="title-col">
                <h2 className="title">Our Team</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="staff-col">
                    <div className="staff-pic"><img src={require("./images/team-1.jpg")} alt="" /></div>
                    <h4>Mr. Haneef</h4>
                    <p><strong>Director & CEO</strong></p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="staff-col">
                    <div className="staff-pic"><img src={require("./images/team-2.jpg")} alt="" /></div>
                    <h4>Mr. Dharmendra Singh</h4>
                    <p><strong>Director</strong></p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="staff-col">
                    <div className="staff-pic"><img src={require("./images/team-1.jpg")} alt="" /></div>
                    <h4>Mr. Ramesh Chandra</h4>
                    <p><strong>Sales Person</strong></p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="staff-col">
                    <div className="staff-pic"><img src={require("./images/team-2.jpg")} alt="" /></div>
                    <h4>Mr. Nitish Sharma</h4>
                    <p><strong>Technician Head</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="container">
          <div className="title-col">
            <h2 className="title">Our Testimonials</h2>
          </div>

          <Slider {...testimonialSettings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="item">
                <div className="testi">
                  <div className="user-quote">
                    <img src={testimonial.img} alt="quote-icon" />
                  </div>
                  <p>{testimonial.quote}</p>
                  <div className="teststar">
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                  </div>
                  <h4>{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="contact-content">
                <div className="footer-social">
                  <a href="#" target="_blank" onClick={handleLinkClick}>
                    <i className="lab la-facebook-f"></i>
                  </a>
                  <a href="#" target="_blank" onClick={handleLinkClick}>
                    <i className="lab la-instagram"></i>
                  </a>
                  <a href="#" target="_blank" onClick={handleLinkClick}>
                    <i className="lab la-youtube"></i>
                  </a>
                  <a href="#" target="_blank" onClick={handleLinkClick}>
                    <i className="lab la-linkedin-in"></i>
                  </a>
                </div>
                <p>Click count: {clickCount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>© 2024 Tnpofficer Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
