import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    // footer
    <footer className="bottom-footer-area">
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-6 mx-auto">
            <p className="copywrite-text">
              Copyright ©2021 |{" "}
              <Link to="https://onlytarikul.com" target="_blank">
                Tarikul Islam
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;