import React, { Fragment, useState } from "react";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { contact } from "../api/contact";
import Footer from "./Footer";
import { showLoading } from "./helpers/loading";
import { showErrorMessage, showSuccessMessage } from "./helpers/message";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    errMsg: false,
    loading: false,
    successMsg: false,
  });
  const { name, phone, email, message, errMsg, loading, successMsg } = formData;

  // *********** Event Handler**********//
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      errMsg: "",
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (isEmpty(name) || isEmpty(phone) ||isEmpty(email)||isEmpty(message)) {
      setFormData({ ...formData, errMsg: "All fields are required" });
    }
   else if (!isEmail(email)) {
    setFormData({ ...formData, errMsg: "Invalid Email" });
  } // true if above regex is satisfied and (&&) it does not (`!`) match `0`s `5` or more times
  else if(phone.match(/^(0|[+91]{3})?[7-9][0-9]{9}$/)){
  setFormData({ ...formData, errMsg: "Invalid Phone Number" });
  }
  else{
    
    const { name,phone,email, message } = formData;
      const data = {name,phone,email, message};
      setFormData({ ...formData, loading: true });
    contact(data).then((res)=>{
      console.log(res)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        loading: false,
        successMsg:res.data.successMsg,
      });

    }).catch((err)=>{
      console.log("Axios signup error:", err);
      setFormData({
        ...formData,
        loading: false,
        errMsg: err.response.data.errorMsg,
      });
    })
    
    return false;
  }
  }
  return (
    <Fragment>

    <div className="container bs2">
<h1>Contact Us</h1>
<div className="row">
        <div className="col-md-12 mx-auto align-self-center ">
      
      <form onSubmit={handleSubmit} noValidate>
        <div className="row ">
          <div className="col-sm-6 my-4">
            <img
              className="img-fluid"
              src="https://th.bing.com/th/id/OIP.0J4t-f6KF9bngqq_OwlIeAHaFK?pid=ImgDet&w=800&h=557&rs=1"
              alt="contactimage"
            />
           <h5 className="text-center ">
              <i className="fa-solid fa-phone"></i> +91 1234567890
            </h5>
            <h5 className="text-center">
              <i className="fa-solid fa-map-marker"></i> no4,abcd,chennai-9
            </h5>

            <h5 className="text-center">
              <i class="fa-solid fa-envelope"></i> avmrental@gmail.com
            </h5>
          </div>

         
          <div className="col-sm-6 my-4">
          {errMsg && showErrorMessage(errMsg)}
          {loading && <div className="text-center">{showLoading()}</div>}
          {successMsg && showSuccessMessage(successMsg)}
            <h3>Send us Message</h3>
            <div className="form-group">
              <label htmlFor="name" className="text-secondary">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control"
                onChange={handleChange}
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="text-secondary">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="ex: +91 2222222222"
                className="form-control"
                onChange={handleChange}
                value={phone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-secondary">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control"
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="text-secondary">
                Message
              </label>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Your Message"
                className="form-control"
                onChange={handleChange}
                value={message}
              ></textarea>
            </div>
            {/* <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>Message has been sent</div> */}
            <button className="btn btn-dark mt-2" type="submit">
              Submit
            </button>
            
          </div>
          
        </div>
      </form>
      </div>
      </div>
    </div>
    <Footer />
    </Fragment>
  );
};

export default ContactUs;
