import React, { useEffect } from 'react';
import logo from './images/logo.png'; // Import your logo image
import banner1 from './images/banner-1.jpg'; // Import your banner images
import banner2 from './images/banner-2.jpg';
import banner3 from './images/banner-3.jpg';
import banner4 from './images/banner-4.jpg';
import banner5 from './images/banner-5.jpg';
import bg1 from './images/bg-01.jpg'
import './custom.css';
import './services.js';
import './about.js';
import './appointment.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/BannerSlider.css"; 
import './css/TestimonialSlider.css'
import 'animate.css/animate.min.css';
import WOW from 'wowjs';


function App() {
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
  
  const bannerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

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

  useEffect(() => {
    new WOW.WOW().init();
}, []);

useEffect(() => {
  let a = 0;
  const handleScroll = () => {
      const counterElement = document.getElementById('counter');
      if (!counterElement) return;

      const oTop = counterElement.getBoundingClientRect().top - window.innerHeight;
      if (a === 0 && window.scrollY > oTop) {
          document.querySelectorAll('.counter-value').forEach(element => {
              const countTo = parseInt(element.getAttribute('data-count'), 10);
              const duration = 4000; // Total duration for the animation in milliseconds
              const steps = 50; // Total steps for the animation
              const increment = Math.ceil(countTo / steps);
              const stepTime = Math.abs(Math.floor(duration / steps));
              let currentNum = 0;

              const timer = setInterval(() => {
                  currentNum += increment;
                  if (currentNum > countTo) {
                      currentNum = countTo;
                  }
                  element.textContent = currentNum;

                  if (currentNum === countTo) {
                      clearInterval(timer);
                  }
              }, stepTime);
          });
          a = 1;
      }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const testimonials = [
    {
      img: require('./images/quote-icon.png'), 
      quote: "The service was performed well. I am particularly impressed by the constant updates I kept getting about the issues and the progress of my repairs. I also appreciate the transparency shown by you in terms of the costs and parts for repairs. Please keep it up. ",
      name: "Amit Gupta"
    },
    {
      img: require('./images/quote-icon.png'),
      quote: "In simple words, one stop shop for all luxury cars. I had taken my C class for the check engine light problem, these guys nailed it down pretty quickly and sorted it out very easily. Thanks to them, keep up the good work.",
      name: "Sumit Saini"
    },
    {
      img: require('./images/quote-icon.png'),
      quote: "Had given my Audi Q3 for dent removal and painting service. Very well done and quality of service is very professional. I am very happy with the car after the service and appreciate the quality of workmanship, and delivery of the car as promised.",
      name: "Rakesh Kumar"
    },
    {
      img: require('./images/quote-icon.png'),
      quote: " Fantastic service. I got my Audi for some dent + paint work and the work was perfect. Yes, PERFECT. What was best is the professionalism that they showed and the small extras that they did which made it truly World-Class service.",
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
      </div>
      {/* Topbar content */}
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
      </header>
      {/* Header content */}
      <div className="banner">
      <Slider {...bannerSettings} className="banner-slider">
        <div className="item">
          <div className="banner_containt">
            <h1>Periodic Car Service in Hyderabad</h1>
            <p>Find the best Luxury car services for Peak Performance.</p>
            <a href="services" className="common-btn">View All Services</a>
          </div>
          <img src={banner1} alt="" className="img-responsive" />
        </div>
        <div className="item">
          <div className="banner_containt">
            <h1>Auto Repair & Maintenance</h1>
            <p>SERVICE, MAINTENANCE & REPAIR BY THE CERTIFIED SERVICE EXPERTS</p>
            <a href="services" className="common-btn">View All Services</a>
          </div>
          <img src={banner2} alt="" className="img-responsive" />
        </div>
        <div className="item">
          <div className="banner_containt">
            <h1>LUXURY CAR DENTING & PAINTING SERVICES</h1>
            <p>We make use of cutting-edge tools and the best unique paints.</p>
            <a href="services" className="common-btn">View All Services</a>
          </div>
          <img src={banner3} alt="" className="img-responsive" />
        </div>
        <div className="item">
          <div className="banner_containt">
            <h1>LUXURY CAR CLEANING SERVICES</h1>
            <p>Try Carbia Motors for Eco-friendly Luxury Car Cleaning Services</p>
            <a href="services" className="common-btn">View All Services</a>
          </div>
          <img src={banner4} alt="" className="img-responsive" />
        </div>
        <div className="item">
          <div className="banner_containt">
            <h1>Car Spa / Detailing</h1>
            <p>We are most known for convenience, upscale quality and professional integrity at competitive prices.</p>
            <a href="services" className="common-btn">View All Services</a>
          </div>
          <img src={banner5} alt="" className="img-responsive" />
        </div>
      </Slider>
    </div>
      {/* Banner content */}
      <div className="cars-companies">
        <div className="container">
        <div className="title-col wow animate__animated animate__slideInUp">
            <h2 className="title">Brands We Serve</h2>
          </div>
          <div className="car-logo">
            <a href="appointment"><span><img src={require("./images/brand-1.jpg")} alt="" /></span></a>
            <a href="appointment"><span><img src={require("./images/brand-2.jpg")} alt="" /></span></a>
            <a href="appointment"><span><img src={require("./images/brand-3.jpg")} alt="" /></span></a>
            <a href="appointment"><span><img src={require("./images/brand-4.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-5.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-6.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-7.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-8.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-9.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-10.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-11.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-12.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-13.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-14.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-15.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-16.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-17.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-19.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-20.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-21.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-22.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-23.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-24.jpg")} alt="" /></span></a>
          <a href="appointment"><span><img src={require("./images/brand-25.jpg")} alt="" /></span></a>
          </div>
        </div>
      </div>
      {/* Car companies content */}
      <div>
      <div className="homeservice-4cols">
      <div className="container">
        <div className="whyhome-text">
          <div className="title-col wow slideInUp">
            <h2 className="title">Why Choose Us</h2>
          </div>
          <p>
            Carbia Motors, located in Hyderabad, Telangana, is a premier automobile service center specializing in comprehensive car repair and maintenance services. Our dedication lies in enhancing vehicle performance through expert servicing, repairs, and a vast inventory of spare parts. Utilizing cutting-edge diagnostic testers and tools, our skilled technicians adeptly tackle various automotive issues 
            <b>spanning engine, transmission, brake, suspension, AC, and electrical repairs.</b>
          </p> 
          
          <p>
            Our hallmark is customer satisfaction, reflected in top-tier after-sales service and enduring client relationships. We cater to a diverse array of car services, notably focusing on luxury vehicles. From Periodic maintenance to intricate body shop repairs, meticulous detailing, common repairs, scanning, diagnostics, transparent pricing, a sophisticated workshop, and swift doorstep express service.
          </p>

          <a href="appointment" className="common-btn">Book Appointment</a>
        </div>
      </div>
    </div>
        {/* Home service 4 columns content */}
      </div>
      <div>
      <div className="homeservices-sec">
      <div className="container">
        <div className="title-col wow slideInUp">
          <h3 className="title">Car Services We Offer</h3>
          <div className="title-para">
    <strong>
        The carbia motors is the place to go! We offer top-quality and hygienic services, to keep your car looking its best & roadworthy. As a one-stop solution for all your car care needs, The carbia motors is the go-to choice in Gopanpally - Hyderabad and the surrounding area. <br/><br/>
        The carbia motors is the place to go! We offer top-quality and hygienic services, including premium ceramic coating, to keep your car looking its best.
        As a one-stop solution for all your car care and detailing needs, The carbia motors is the go-to choice in Hyderabad and the surrounding area.
    </strong>
</div>

        </div>

        <div className="row justify-content-center">
          <div className="col-sm-6 col-lg-4">
            <div className="services-4col">
              <a href="services">
                <div className="services-pic">
                  <img src={require("./images/service-1.jpg")} alt="" />
                </div>
                <h3>Periodic Services</h3>
                <div className="common-link">Know More</div>
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="services-4col">
              <a href="services">
                <div className="services-pic">
                  <img src={require("./images/service-2.jpg")} alt="" />
                </div>
                <h3>Repairs & <br/> Maintenance</h3>
                <div className="common-link">Know More</div>
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="services-4col">
              <a href="services">
                <div className="services-pic">
                  <img src={require("./images/service-3.jpg")} alt="" />
                </div>
                <h3>Electrical Repair & Diagnostics</h3>
                <div className="common-link">Know More</div>
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="services-4col">
              <a href="services">
                <div className="services-pic">
                  <img src={require("./images/service-4.jpg")} alt="" />
                </div>
                <h3>Denting & Painting</h3>
                <div className="common-link">Know More</div>
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="services-4col">
              <a href="services">
                <div className="services-pic">
                  <img src={require("./images/service-5.jpg")} alt="" />
                </div>
                <h3>Car <br/> Spa / Detailing</h3>
                <div className="common-link">Know More</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* Home services section content */}
      </div>
      <div>
      <div className="homerepair-sec">
      <div className="container">
        <div className="row" id="slideMobile">
          <div className="col-sm-6 col-md-4 wow slideInLeft">
            <div className="repair-left">
              <h2 className="title">Repair Services That We Offer</h2>
              <p>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes everything from struts, shocks, and tie rod ends to ball joints, springs, and basically everything that is included in repairing the front end of the vehicle.</p>
              <a href="appointment" className="common-btn">Book an Appointment</a>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 wow fadeInLeft">
            <div className="homerepair-list">
              <ul className="marker-list">
                <li>General Auto Repair & Maintenance</li>
                <li>Transmission Repair & Replacement</li>
                <li>Fuel System Repair</li>
                <li>Exhaust System Repair</li>
                <li>Engine Cooling System Maintenance</li>
                <li>Electrical Diagnostics</li>
                <li>Starting and Charging Repair</li>
                <li>Wheel Alignment</li>
                <li>CV Axles</li>
                <li>Computer Diagnostic Testing</li>
                <li>Car Pick up and Drop Service</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 wow fadeInLeft">
            <div className="homerepair-list">
              <ul className="marker-list">
                <li>Manufacturer Recommended Service</li>
                <li>Brake Repair and Replacement</li>
                <li>Air Conditioning A/C Repair</li>
                <li>Tire Repair and Replacement</li>
                <li>Vehicle Preventative Maintenance</li>
                <li>State Emissions Inspection</li>
                <li>Emission Repair Facility</li>
                <li>Tune Up</li>
                <li>Oil Change</li>
                <li>Brake Job / Brake Service</li>
                <li>Engine Cooling System Flush & Repair</li>
                <li>Steering and Suspension Work</li>							
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* Home repair section content */}
      </div>
      <div>
      <div className="homecounters-sec">
        <div className="container mt-5 mb-5">
          <div className="h-about-rtext">
            <div className="row" id="counter">
              <div className="col-sm-6 col-md-3 col-6">
                <div className="h-about-no">
                  <b className="mb-0" style={{ lineHeight: '0' }}><i className="las la-car"></i></b>
                  <b className="counter-value" data-count="3480">0</b> Vehicle Repaired
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-6">
                <div className="h-about-no">
                  <b className="mb-0" style={{ lineHeight: '0' }}><i className="las la-file-alt"></i></b>
                  <b className="counter-value" data-count="515">0</b> Total Appointments
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-6">
                <div className="h-about-no">
                  <b className="mb-0" style={{ lineHeight: '0' }}><i className="las la-oil-can"></i></b>
                  <b className="counter-value" data-count="1120">0</b> Customer Jobs
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-6">
                <div className="h-about-no">
                  <b className="mb-0" style={{ lineHeight: '0' }}><i className="las la-cog"></i></b>
                  <b className="counter-value" data-count="24">0</b> Skilled Technicians
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* Home counters section content */}
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
        {/* Testimonial wrapper content */}
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
        <p><a href="login">login</a></p>
       
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


export default App;
