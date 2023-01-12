import React, { Fragment,useContext,useEffect,useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "./helpers/auth";
import { getCart } from "./helpers/localStorage";
import { CartContext } from "./App";

const Header = ({ history }) => {

  const {cart}=useContext(CartContext);

  const handleLogout = (e) => {
    logout(() => {
      history.push("/signin");
    });
  };
  function showNavigation() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bs">
        <div className="container-fluid">
          <Link to="#" className="navbar-brand">
            AVM Rental
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!isAuthenticated() && (
                <Fragment>
                  <li className="nav-item">
                    <Link to="/" className="nav-link ">
                    <i className="fa-solid fa-house"></i> Home
                    </Link>
                  </li>
                  <li className='nav-item'>
								<Link to='/shop' className='nav-link'>
									<i className='fa-solid fa-bag-shopping'></i> Shop
								</Link>
							</li>
              <li
								className='nav-item '
								style={{ position: 'relative' }}
							>
								<Link to='/cart' className='nav-link'>
									<i className='fa-solid fa-shopping-cart position-relative'></i>{' '}
									Cart{' '}
                  <span className="position-absolute badge bg-danger top-0 py-0">
    {cart.length}
							
									</span>
								</Link>
							</li>
                  <li className="nav-item ">
                    <Link to="/signup" className="nav-link px-3">
                    <i className="fa-solid fa-edit"></i> SignUp
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signin" className="nav-link">
                    <i className="fa-solid fa-sign-in-alt"></i> SignIn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                    <i className="fa-solid fa-envelope"></i> Contact
                    </Link>
                  </li>
                </Fragment>
              )}

              {isAuthenticated() && isAuthenticated().role === 0 && (
                <Fragment>
                  <li className="nav-item">
                    <Link to="/user/dashboard" className="nav-link ">
                    <i className="fa-solid fa-user-cog"></i> Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/" className="nav-link ">
                    <i className="fa-solid fa-house"></i> Home
                    </Link>
                  </li>
                  <li className='nav-item'>
								<Link to='/shop' className='nav-link'>
									<i className='fa-solid fa-bag-shopping'></i> Shop
								</Link>
							</li>
              <li
								className='nav-item '
								style={{ position: 'relative' }}
							>
								<Link to='/cart' className='nav-link'>
									<i className='fa-solid fa-shopping-cart position-relative'></i>{' '}
									Cart{' '}
                  <span className="position-absolute badge bg-danger top-0 py-0">
    {cart.length}
							
									</span>
								</Link>
							</li>
                </Fragment>
              )}
              {isAuthenticated() && isAuthenticated().role === 1 && (
                <Fragment>
                  <li className="nav-item">
                    <Link to="/admin/dashboard" className="nav-link ">
                    <i className="fa-solid fa-user-cog"></i> Dashboard
                    </Link>
                  </li>
                </Fragment>
              )}
              {isAuthenticated() && (
                <Fragment>
                  <li className="nav-item">
                    <button
                      className="btn btn-link text-secondary text-decoration-none px-0"
                      onClick={handleLogout}
                    >  <i className="fa-solid fa-sign-out-alt"></i> Logout
                    </button>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  //render
  return <header id="header">{showNavigation()}</header>;
};

export default withRouter(Header);
