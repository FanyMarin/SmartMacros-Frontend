import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-smart-logo">
        <img
          src="../manzana.svg"
          className="smart-apple"
          alt="Smart Macros logo"
        />
        <h1>Smart Macros</h1>
      </div>

      <div className="footer-contact-us">
        <ul className="social-links">
          <Link to="#">
            <li>
              <img
                src="../facebook.svg"
                className="contact-icons"
                alt="facebook"
              />
            </li>
          </Link>

          <Link to="#">
            <li>
              <img src="../github.svg" className="contact-icons" alt="github" />
            </li>
          </Link>

          <Link to="#">
            <li>
              <img
                src="../instagram.svg"
                className="contact-icons"
                alt="instagram"
              />
            </li>
          </Link>
        </ul>
        <p>By Stephany Marín Nájera</p>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
