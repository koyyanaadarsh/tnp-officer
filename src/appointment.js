import React from 'react';
import logo from './images/logo.png';
import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
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
  
  const [formData, setFormData] = useState({
    carMake: '',
    carModel: '',
    registrationDate: '',
    ownerName: '',
    phoneNumber: '',
    inquiry: '',
    serviceSubCategory: '',
    queryMessage: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/carcontact', formData)
      .then((response) => {
        alert('Form submitted successfully!');
        setFormData({
          carMake: '',
          carModel: '',
          registrationDate: '',
          ownerName: '',
          phoneNumber: '',
          inquiry: '',
          serviceSubCategory: '',
          queryMessage: ''
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form.');
      });
  };

  const getServiceSubCategories = () => {
    switch (formData.inquiry) {
      case 'Periodic Services':
        return [
          'Select',
          'Maintenance Service',
          'Car Wash',
          'Sunroof Service',
          'Wheel Alignment',
          'Wheel Balance',
          'Type Rotation',
          'Other Service'
        ];
      case 'Repairs & Maintenance':
        return [
          'Select',
          'Ac Service & Repair',
          'Engine Repair',
          'Transmission Repair',
          'Clutch Service & Repair',
          'Suspension Repair',
          'Brake Repair',
          'Oil & Coolant Repair',
          'Other Repair'
        ];
      case 'Electrical Repair & Diagnostics':
        return [
          'Select',
          'Lights',
          'Horn',
          'Windshield Wipers',
          'Batteries',
          'Electrical Diagnostics & Scanning',
          'Radiator Fan',
          'Others'
        ];
      case 'Denting & Painting':
        return [
          'Select',
          'Body Panel Repair & Painting',
          'Body Parts',
          'Car Denting & Painting',
          'Full Painting',
          'Other'
        ];
      case 'Car Spa / Detailing':
        return [
          'Select',
          'Exterior Rubbing & Polishing',
          'Car Interior Wet Shampooing & Detailing',
          'Ceramic Coating',
          'Teflon Coating',
          'Paint Protection Film (PPF)',
          'Anti Rust Underbody Coating',
          'Other'
        ];
      default:
        return [];
    }
  };

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

      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0 align-items-center">
            <a className="navbar-brand" href="index">
              <div className="logo"><img src={logo} alt="" /></div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="las la-bars "></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item active"><a className="nav-link" href="main">HOME</a></li>
                <li className="nav-item"><a className="nav-link" href="about">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="contact">Contact Us</a></li>
                <li className="nav-item active">
                    <a className="nav-link" href="form">
                      FORM
                    </a>
                  </li>
                <li className="nav-item"><a className="nav-link" href="appointment">Book Appointment</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className="inner-banner">
        <h1>Book an Appointment</h1>
        <img src={require("./images/service-banner.jpg")} alt="" className="img-responsive" />
      </div>
      <div className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-text mt-0">
                <div className="title-col">
                  <h2 className="title">Service Enquiry</h2>
                </div>
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6 col-md-3">
                        <div className="form-group">
                          <label htmlFor="carMake">Car Make</label>
                          <select className="form-control" name="carMake" id="carMake" onChange={handleChange} value={formData.carMake}>
                            {/* <option disabled selected>Select an option</option> */}
                            <option value="Select">select</option>
                            <option value="Audi">Audi</option>
                            <option value="Aston Martin">Aston Martin</option>
                            <option value="BMW">BMW</option>
                            <option value="Bently">Bently</option>
                            <option value="Bugatti">Bugatti</option>
                            <option value="Chrysler">Chrysler</option>
                            <option value="Cadillac">Cadillac</option>
                            <option value="Dodge">Dodge</option>
                            <option value="Ferrari">Ferrari</option>
                            <option value="Ford Mustang">Ford Mustang</option>
                            <option value="Hummer">Hummer</option>
                            <option value="Jeep">Jeep</option>
                            <option value="Jaguar">Jaguar</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Lexus">Lexus</option>
                            <option value="Land Rover">Land Rover</option>
                            <option value="Maserati">Maserati</option>
                            <option value="Mercedes Benz">Mercedes Benz</option>
                            <option value="McLaren">McLaren</option>
                            <option value="Mini">Mini</option>
                            <option value="Nissan GT-R">Nissan GT-R</option>
                            <option value="Porsche">Porsche</option>
                            <option value="Rolls Royce">Rolls Royce</option>
                            <option value="Skoda">Skoda</option>
                            <option value="Seat">Seat</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Volkswagen">Volkswagen</option>
                            <option value="Volvo">Volvo</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="form-group">
                          <label htmlFor="carModel">Car Model</label>
                          <input type="text" className="form-control" name="carModel" id="carModel" onChange={handleChange} value={formData.carModel} required />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="form-group">
                          <label htmlFor="registrationDate">Registration Date</label>
                          <input type="date" className="form-control" name="registrationDate" id="registrationDate" onChange={handleChange} value={formData.registrationDate} required />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="form-group">
                          <label htmlFor="ownerName">Owner Name</label>
                          <input type="text" className="form-control" name="ownerName" id="ownerName" onChange={handleChange} value={formData.ownerName} required />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <div className="form-group">
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <input type="text" className="form-control" name="phoneNumber" id="phoneNumber" onChange={handleChange} value={formData.phoneNumber} required />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <div className="form-group">
                          <label htmlFor="inquiry">Interested Service</label>
                          <select className="form-control" name="inquiry" id="inquiry" onChange={handleChange} value={formData.inquiry}>
                          <option value="select">select</option>
                            <option value="Periodic Services">Periodic Services</option>
                            <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                            <option value="Electrical Repair & Diagnostics">Electrical Repair & Diagnostics</option>
                            <option value="Denting & Painting">Denting & Painting</option>
                            <option value="Car Spa / Detailing">Car Spa / Detailing</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <div className="form-group">
                          <label htmlFor="serviceSubCategory">Service Sub Category</label>
                          <select className="form-control" name="serviceSubCategory" id="serviceSubCategory" onChange={handleChange} value={formData.serviceSubCategory}>
                            {getServiceSubCategories().map((category) => (
                              <option key={category} value={category}>{category}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="queryMessage">Write your Query</label>
                          <textarea className="form-control" name="queryMessage" id="queryMessage" onChange={handleChange} value={formData.queryMessage} rows="3" required />
                        </div>
                      </div>
                      <div className="col-sm-12 mt-3">
                        <div className="form-group text-center">
                          <input type="submit" name="submit" className="btn btn-primary common-btn" id="submit_btn" value="Send Now" />
                        </div>
                      </div>
                    </div>
                  </form>
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
        <div className="copyright">
          <div className="container">
            <p>© 2024 Carbia Motors Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactForm;
