import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import logo from './images/logo.png';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            productService: '',
            message: ''
        };
    }

    componentDidMount() {
        document.addEventListener("DOMContentLoaded", () => {
            window.addEventListener("scroll", this.handleScroll);
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const header = document.querySelector(".main-header");
        if (window.scrollY > 100) {
            header.classList.add("fixed-nav");
        } else {
            header.classList.remove("fixed-nav");
        }
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, phone, productService, message } = this.state;

        try {
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, productService, message })
            });

            if (response.status === 200) {
                window.alert('Thank You! Form has been submitted.');
                this.setState({
                    name: '',
                    email: '',
                    phone: '',
                    productService: '',
                    message: ''
                });
            } else {
                window.alert('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { name, email, phone, productService, message } = this.state;
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
                            <a className="navbar-brand" href="main">
                                <div className="logo">
                                    <img src={logo} alt="Logo" /> 
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

                <div className="inner-banner">
                    <h1>CONTACT US</h1>
                    <img src={require("./images/service-banner.jpg")} alt="" className="img-responsive" />
                </div>

                <div className="inner-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="about-text mt-0">
                                    <h2 className="title mb-2 mb-4">Get in touch</h2>
                                    <div className="contact-form">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={this.handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" placeholder="Email Address" name="email" value={email} onChange={this.handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input type="tel" className="form-control" placeholder="Phone Number" name="phone" value={phone} onChange={this.handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <select className="form-control" name="productService" value={productService} onChange={this.handleChange} required>
                                                            <option disabled selected>Select a Service</option>
                                                            <option value="Periodic Services">Periodic Services</option>
                                                            <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                                                            <option value="Electrical Repair & Diagnostics">Electrical Repair & Diagnostics</option>
                                                            <option value="Denting & Painting">Denting & Painting</option>
                                                            <option value="Car Spa / Detailing">Car Spa / Detailing</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" name="message" placeholder="Your Message..." value={message} onChange={this.handleChange} rows="4" required></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 mt-3">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary">Send Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="contact-us-sec">
                                    <h2 className="title mb-2 mb-4">Carbia Motors</h2>
                                    <p>
                                        <strong className="blue-text">Location</strong> PL No. 132 Ranganadha Nagar,
                                        Gopanpally, Srilingampally, Hyderabad 500019.
                                    </p>
                                    <p>
                                        <strong className="blue-text">Phone</strong>{' '}
                                        <small>
                                            <a href="tel:++919780429999">
                                                <i className="las la-phone"></i> +91 9780429999
                                            </a>
                                            <a href="tel:++919705782222">
                                                <i className="las la-phone"></i> +91 9705782222
                                            </a>
                                            <a href="https://wa.me/919052091234">
                                                <i className="lab la-whatsapp"></i> +91 9052091234
                                            </a>
                                        </small>
                                    </p>
                                    <p className="mb-1">
                                        <strong className="blue-text">Mail Us</strong>
                                    </p>
                                    <h4>
                                        <a href="mailto:haneef@carbiamotors.com">
                                            <i className="las la-envelope"></i> haneef@carbiamotors.com
                                        </a>{' '}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="contact-map">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43071.94125285683!2d78.453894628735!3d17.409017557824296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713787048377!5m2!1sen!2sin"
                                height="450"
                                style={{ border: 0, width: '100%' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <div className="footer-appoint-sec">
                            <div className="leftfoot-appoint">
                                <div className="leftappoint-ico">
                                    <img src={require("./images/foot-calender-icon.png")} alt="" />
                                </div>
                                <div className="leftappoint-txt">
                                    <p>Need a Service Consultation?</p>
                                    <h4>JUST FILL THE FORM & YOU’RE DONE!</h4>
                                </div>
                            </div>
                            <div className="rightfoot-appoint">
                                <a href="appointment" className="common-btn">
                                    Book A Free Consultation
                                </a>
                            </div>
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
                                    <a href="#" target="_blank">
                                        <i className="lab la-facebook-f"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i className="lab la-instagram"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i className="lab la-youtube"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i className="lab la-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="quicklinks">
                                    <h3>Quick Links</h3>
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
                                <div className="quicklinks">
                                    <h3>Carbia SERVICES</h3>
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
}

export default ContactUs;
