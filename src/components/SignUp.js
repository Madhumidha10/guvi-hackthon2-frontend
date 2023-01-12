import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { showErrorMessage, showSuccessMessage } from "./helpers/message";
import { showLoading } from "./helpers/loading";
import { signup } from "../api/auth";
import { isAuthenticated } from "./helpers/auth";

const SignUp = () => {
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      history.push("/user/dashboard");
    }
  }, [history]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    successMsg: false,
    errMsg: false,
    loading: false,
  });
  const { username, email, password, cpassword, successMsg, errMsg, loading } =
    formData;
  // *********** Event Handler**********//
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      successMsg: "",
      errMsg: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //client-side validation
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(cpassword)
    ) {
      setFormData({ ...formData, errMsg: "All fields are required" });
    } else if (!isEmail(email)) {
      setFormData({ ...formData, errMsg: "Invalid Email" });
    } else if (!equals(password, cpassword)) {
      setFormData({ ...formData, errMsg: "Password do not match" });
    } else {
      const { username, email, password } = formData;
      const data = { username, email, password };
      setFormData({ ...formData, loading: true });
      signup(data)
        .then((res) => {
          console.log(res);
          setFormData({
            username: "",
            email: "",
            password: "",
            cpassword: "",
            loading: false,
            successMsg: res.data.successMsg,
          });
        })
        .catch((err) => {
          console.log("Axios signup error:", err);
          setFormData({
            ...formData,
            loading: false,
            errMsg: err.response.data.errMessage,
          });
        });
    }
    console.log(formData);
  };

  //************View Form */
  function showSignUpForm() {
    return (
      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        {/* username */}
        <div className="form-group input-group">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fa fa-user"></i>
            </span>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* email */}
        <div className="form-group input-group">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fa fa-envelope"></i>
            </span>
            <input
              value={email}
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* password */}
        <div className="form-group input-group">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fa fa-lock"></i>
            </span>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Create Password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* cpassword */}
        <div className="form-group input-group">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fa fa-lock"></i>
            </span>
            <input
              type="password"
              name="cpassword"
              className="form-control"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Signup button */}
        <div className="form-group d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
        </div>

        <p className="text-center text-white bg-black mt-5 p-2">
          Have An Account?<Link to="/signin">Log In </Link>
        </p>
      </form>
    );
  }
  return (
    <div className="signup-container ">
      <div className="row px-2 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {successMsg && showSuccessMessage(successMsg)}
          {errMsg && showErrorMessage(errMsg)}
          {loading && <div className="text-center">{showLoading()}</div>}
          {showSignUpForm()}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
