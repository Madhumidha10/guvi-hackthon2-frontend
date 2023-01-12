import React,{useState} from 'react'
import isEmpty from "validator/lib/isEmpty";
import { newOrder } from '../api/order';
import { showLoading } from './helpers/loading';
import { showErrorMessage } from './helpers/message';
const Shipping = () => {
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    address:"",
    city:"",
    state:"",
    country:"",
    pincode:"",
    errMsg: false,
    loading: false,
  });
const {userName,phone,address,city,state,country,pincode,errMsg,loading}=formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      errMsg: "",
    });
  };
  const handleCheckout=(e)=>{

     e.preventDefault();
       if(isEmpty(userName)||isEmpty(address)||isEmpty(phone)||isEmpty(city)||isEmpty(state)||isEmpty(country)||isEmpty(pincode))
  {
    setFormData({ ...formData, errMsg: "All fields are required" });
  }
  else
  {
    setFormData({ ...formData, loading: true });
    const data={userName,phone,address,city,state,pincode,country}
    newOrder(data)
    .then((res) => {console.log(res)}).catch((err)=>{console.log(err)})
  }
  }
  return (

   
    <div className='container row'>
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      {errMsg && showErrorMessage(errMsg)}
          {loading && <div className="text-center">{showLoading()}</div>}
      <form className="needs-validation" onSubmit={handleCheckout} noValidate>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="userName">User name</label>
            <input type="text" className="form-control" name="userName" value={userName} onChange={handleChange} />
            <div className="invalid-feedback">
              Valid user name is required.
            </div>
          </div>
         
           

        <div className="col-md-6 mb-3">
          <label htmlFor="phone">Contact no <span className="text-muted"></span></label>
          <input type="number" className="form-control" name="phone" placeholder="1234567890" value={phone} onChange={handleChange} />
          <div className="invalid-feedback">
            Please enter a valid phone number.
          </div>
        </div>

         <div className="col-md-12 mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" name="address" value={address} onChange={handleChange} />
          <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>
          </div>
       
        <div className="row">
        <div className="col-md-6 mb-3">
            <label htmlFor="city">City</label>
            <select className="custom-select d-block w-100 form-control" name="city" value={city} onChange={handleChange}>
              <option value="">Choose...</option>
              <option>Chennai</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="state">State</label>
            <select className="custom-select d-block w-100 form-control" name="state" value={state} onChange={handleChange}>
              <option value="">Choose...</option>
              <option>Tamilnadu</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="country">Country</label>
            <select className="custom-select d-block w-100 form-control" name="country" value={country} onChange={handleChange}>
              <option value="">Choose...</option>
              <option>India</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
     
          <div className="col-md-6 mb-3">
            <label htmlFor="pincode">PIN Code</label>
            <input type="text" className="form-control" name="pincode" value={pincode} onChange={handleChange} />
            <div className="invalid-feedback">
              PIN code required.
            </div>
          </div>
        </div> 
     

      
       
        <hr className="mb-4"/>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
      </form>
    </div>
    </div>
  )
}

export default Shipping