import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return(
    <footer className="footer-wrapper" >
        {/*TODO: Agrega Links para redes sociales y /home en el logo*/}
        <div className="footer-smart-logo">
          <img src="../manzana.svg"
                className="smart-apple"
                alt="Smart Macros logo"
          />
          <h1>Smart Macros</h1>
        </div>
        <div className="footer-contact-us">
          <ul className="social-links">
            <li>
            <img src="../facebook.svg"
                  className="contact-icons"
                  alt="facebook"
                />
            </li>
            <li>
            <img src="../github.svg"
                  className="contact-icons"
                  alt="github"
                />
            </li>
            <li>
            <img src="../instagram.svg"
                  className="contact-icons"
                  alt="instagram"
                />
            </li>
          </ul>
          <p>By Stephany Marín Nájera</p>
          <hr/>
        </div>
    </footer>
  );
};

export default Footer;