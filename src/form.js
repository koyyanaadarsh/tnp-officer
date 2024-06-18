import React, { useState } from 'react';
import axios from 'axios';
import logo from './images/logo.png';
import {
    Container,
    Grid,
    TextField,
    Button,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextareaAutosize
} from '@mui/material';

const AppointmentForm = () => {
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
      
       const initialJobCardData = {
        created_datetime: '',
        customer_arrival_datetime: '',
        estimated_delivery_datetime: ''
    };

    const initialCustomerData = {
        customer_name: '',
        address: '',
        phone_res: '',
        phone_off: '',
        phone_mob: '',
        phone_fax: '',
        email: '',
        customer_gstin: ''
    };

    const initialVehicleData = {
        vehicle_reg_no: '',
        current_kms: '',
        model: '',
        variant: '',
        color: '',
        sold_by: '',
        sold_on: '',
        chassis_no: '',
        operation_type: '',
        engine_number: '',
        last_attended_at: '',
        road_test_done: 'N',
        revisit_flag: 'N'
    };

    const initialCustomerRequestData = {
        customer_cmpl_code: '',
        complaint_details: '',
        job_code: '',
        sac_code: '',
        repair_details: '',
        std_hrs: '',
        parts_estimate: '',
        labour_estimate: ''
    };

   
    const [jobCardData, setJobCardData] = useState(initialJobCardData);
    const [customerData, setCustomerData] = useState(initialCustomerData);
    const [vehicleData, setVehicleData] = useState(initialVehicleData);
    const [customerRequestData, setCustomerRequestData] = useState(initialCustomerRequestData);

    
    const handleChange = (setState) => (e) => {
        setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           
            await axios.post('http://localhost:5000/api/jobcards', jobCardData);
            await axios.post('http://localhost:5000/api/customerdetails', customerData);
            await axios.post('http://localhost:5000/api/vehicledetails', vehicleData);
            await axios.post('http://localhost:5000/api/customerrequests', customerRequestData);
            
            alert('Appointment details submitted successfully!');
            
            setJobCardData(initialJobCardData);
            setCustomerData(initialCustomerData);
            setVehicleData(initialVehicleData);
            setCustomerRequestData(initialCustomerRequestData);
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting appointment details');
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
        {/* Top bar content */}
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
        {/* Header content */}
      </header>
      <div className="inner-banner">
      <h1>FORM</h1>
      <img src={require("./images/service-banner.jpg")} alt="" className="img-responsive" />
    </div><br></br>
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Details Form
            </Typography>
            <form onSubmit={handleSubmit}>
                {/* Job Card Details */}
                <Typography variant="h6" gutterBottom>
                    Job Card
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            type="datetime-local"
                            name="created_datetime"
                            label="Created Datetime"
                            fullWidth
                            value={jobCardData.created_datetime}
                            onChange={handleChange(setJobCardData)}
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="datetime-local"
                            name="customer_arrival_datetime"
                            label="Customer Arrival Datetime"
                            fullWidth
                            value={jobCardData.customer_arrival_datetime}
                            onChange={handleChange(setJobCardData)}
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="datetime-local"
                            name="estimated_delivery_datetime"
                            label="Estimated Delivery Datetime"
                            fullWidth
                            value={jobCardData.estimated_delivery_datetime}
                            onChange={handleChange(setJobCardData)}
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Customer Details */}
                <Typography variant="h6" gutterBottom>
                    Customer Details
                </Typography>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        type="text"
                        name="customer_name"
                        label="Customer Name"
                        fullWidth
                        value={customerData.customer_name}
                        onChange={handleChange(setCustomerData)}
                        required
                    />
                </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            name="address"
                            label="Address"
                            fullWidth
                            value={customerData.address}
                            onChange={handleChange(setCustomerData)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="phone_res"
                            label="Phone (Res)"
                            fullWidth
                            value={customerData.phone_res}
                            onChange={handleChange(setCustomerData)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="phone_off"
                            label="Phone (Off)"
                            fullWidth
                            value={customerData.phone_off}
                            onChange={handleChange(setCustomerData)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="phone_mob"
                            label="Phone (Mob)"
                            fullWidth
                            value={customerData.phone_mob}
                            onChange={handleChange(setCustomerData)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="phone_fax"
                            label="Phone (Fax)"
                            fullWidth
                            value={customerData.phone_fax}
                            onChange={handleChange(setCustomerData)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="email"
                            name="email"
                            label="Email"
                            fullWidth
                            value={customerData.email}
                            onChange={handleChange(setCustomerData)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            name="customer_gstin"
                            label="Customer GSTIN/UIN"
                            fullWidth
                            value={customerData.customer_gstin}
                            onChange={handleChange(setCustomerData)}
                        />
                    </Grid>
                </Grid>

                {/* Vehicle Details */}
                <Typography variant="h6" gutterBottom>
                    Vehicle Details
                </Typography>
                <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        type="text"
                        name="vehicle_reg_no"
                        label="Vehicle Reg No"
                        fullWidth
                        value={vehicleData.vehicle_reg_no}
                        onChange={handleChange(setVehicleData)}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        type="number"
                        name="current_kms"
                        label="Current KMs"
                        fullWidth
                        value={vehicleData.current_kms}
                        onChange={handleChange(setVehicleData)}
                        required
                    />
                </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="model"
                            label="Model"
                            fullWidth
                            value={vehicleData.model}
                            onChange={handleChange(setVehicleData)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="variant"
                            label="Variant"
                            fullWidth
                            value={vehicleData.variant}
                            onChange={handleChange(setVehicleData)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="color"
                            label="Color"
                            fullWidth
                            value={vehicleData.color}
                            onChange={handleChange(setVehicleData)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="sold_by"
                            label="Sold By"
                            fullWidth
                            value={vehicleData.sold_by}
                            onChange={handleChange(setVehicleData)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="date"
                            name="sold_on"
                            label="Sold On"
                            fullWidth
                            value={vehicleData.sold_on}
                            onChange={handleChange(setVehicleData)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="chassis_no"
                            label="Chassis No"
                            fullWidth
                            value={vehicleData.chassis_no}
                            onChange={handleChange(setVehicleData)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="operation_type"
                            label="Operation Type"
                            fullWidth
                            value={vehicleData.operation_type}
                            onChange={handleChange(setVehicleData)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            name="engine_number"
                            label="Engine Number"
                            fullWidth
                            value={vehicleData.engine_number}
                            onChange={handleChange(setVehicleData)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="date"
                            name="last_attended_at"
                            label="Last Attended At"
                            fullWidth
                            value={vehicleData.last_attended_at}
                            onChange={handleChange(setVehicleData)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Road Test Done</InputLabel>
                            <Select
                                name="road_test_done"
                                value={vehicleData.road_test_done}
                                onChange={handleChange(setVehicleData)}
                                label="Road Test Done"
                            >
                                <MenuItem value="Y">Yes</MenuItem>
                                <MenuItem value="N">No</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Revisit Flag</InputLabel>
                            <Select
                                name="revisit_flag"
                                value={vehicleData.revisit_flag}
                                onChange={handleChange(setVehicleData)}
                                label="Revisit Flag"
                            >
                                <MenuItem value="Y">Yes</MenuItem>
                                <MenuItem value="N">No</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                {/* Customer Requests */}
                <Typography variant="h6" gutterBottom>
                    Customer Requests
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            name="customer_cmpl_code"
                            label="Customer Complaint Code"
                            fullWidth
                            value={customerRequestData.customer_cmpl_code}
                            onChange={handleChange(setCustomerRequestData)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type='text'
                            name="complaint_details"
                            label="Complaint Details"
                           fullWidth
                            value={customerRequestData.complaint_details}
                            onChange={handleChange(setCustomerRequestData)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            name="job_code"
                            label="Job Code"
                            fullWidth
                            value={customerRequestData.job_code}
                            onChange={handleChange(setCustomerRequestData)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            name="sac_code"
                            label="SAC Code"
                            fullWidth
                            value={customerRequestData.sac_code}
                            onChange={handleChange(setCustomerRequestData)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            name="repair_details"
                            label="Repair Details"
                            fullWidth
                            value={customerRequestData.repair_details}
                            onChange={handleChange(setCustomerRequestData)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="number"
                            name="std_hrs"
                            label="Standard Hours"
                            fullWidth
                            value={customerRequestData.std_hrs}
                            onChange={handleChange(setCustomerRequestData)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="number"
                            name="parts_estimate"
                            label="Parts Estimate"
                            fullWidth
                            value={customerRequestData.parts_estimate}
                            onChange={handleChange(setCustomerRequestData)}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="number"
                            name="labour_estimate"
                            label="Labour Estimate"
                            fullWidth
                            value={customerRequestData.labour_estimate}
                            onChange={handleChange(setCustomerRequestData)}
                            required
                        />
                    </Grid>
                </Grid>

                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                    Submit
                </Button>
            </form>
        </Container><br></br>
        <footer>
            <div className="container">
                <div className="footer-appoint-sec">
                    <div className="leftfoot-appoint">
                        <div className="leftappoint-ico">
                            <img src={require("./images/foot-calender-icon.png")}alt="" />
                        </div>
                        <div className="leftappoint-txt">
                            <p>Need a Service Consultation?</p>
                            <h4>JUST FILL THE FORM &amp; YOU’RE DONE!</h4>
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
};

export default AppointmentForm;
