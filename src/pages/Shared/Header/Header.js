import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    // header
    <header>
      {/* navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Deb Tour
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto text-uppercase">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              {!user.email ? (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/addService" className="nav-link">
                      Add New Service
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/manageAllOrders" className="nav-link">
                      Manage All Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/myOrders" className="nav-link">
                      My Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button onClick={logout} className="nav-link">
                      LOGOUT
                    </button>
                  </li>
                  <li className="nav-item profile">
                    <span> {user.displayName}</span>
                    <span className="nav-link">
                      <img
                        src={user.photoURL}
                        alt="profile"
                        width="25px"
                        height="25px"
                      />
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
