import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { showErrorMessage } from "./helpers/message";
import { showLoading } from "./helpers/loading";
import { isAuthenticated, setAuthentication } from "./helpers/auth";
import { signin } from "../api/auth";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
const SignIn = ({location}) => {
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push("/admin/dashboard");
    } else  if (isAuthenticated() && isAuthenticated().role === 0) {
      history.push("/user/dashboard");
    }
  }, [history]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errMsg: false,
    loading: false,
  });
  const { email, password, errMsg, loading } = formData;

  // *********** Event Handler**********//
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      errMsg: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // //client-side validation
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({ ...formData, errMsg: "All fields are required" });
    } else if (!isEmail(email)) {
      setFormData({ ...formData, errMsg: "Invalid Email" });
    } else {
      const { email, password } = formData;
      const data = { email, password };
      setFormData({ ...formData, loading: true });
      const redirect = location.search.split('=')[1];
      signin(data)
        .then((res) => {
          // console.log(res);
          setAuthentication(res.data.token, res.data.user);
          if (isAuthenticated() && isAuthenticated().role === 1) {
            console.log("redirect to Admin dashboard");
            history.push("/admin/dashboard");
          } else if (isAuthenticated() && isAuthenticated().role === 0 && !redirect) {
            console.log("redirect to User dashboard");
            history.push("/user/dashboard");
          }
          else {
						console.log('Redirecting to shipping');
						history.push('/shipping');
					}
        
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
  function showSignInForm() {
    return (
      <form className="signin-form" onSubmit={handleSubmit} noValidate>
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

        {/* Signup button */}
        <div className="form-group d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="text-center text-white bg-black mt-5 p-2">
          Don't have An Account?<Link to="/signup">Register here </Link>
        </p>
      </form>
    );
  }
  return (
    <div className="signin-container ">
      <div className="row px-2 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {errMsg && showErrorMessage(errMsg)}
          {loading && <div className="text-center">{showLoading()}</div>}
          {showSignInForm()}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
