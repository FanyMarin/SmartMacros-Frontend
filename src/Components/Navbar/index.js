import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = {};
  // const logout = () => {};
  return (
    <header>
      <nav
        className="uk-navbar-container uk-navbar-transparent navbar-container"
        uk-navbar="true"
      >
        {user._id ? (
          <div className="uk-navbar-left uk-background-contain uk-background-muted">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/home" className="uk-logo uk-background-contain">
                  <div className="footer-smart-logo">
                    <img
                      src="../manzana.svg"
                      className="smart-apple"
                      alt="Smart Macros logo"
                    />
                    <h1>Smart Macros</h1>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/">
                  <div className="footer-smart-logo">
                    <img
                      src="../manzana.svg"
                      className="smart-apple"
                      alt="Smart Macros logo"
                    />
                    <h1>Smart Macros</h1>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {user._id ? (
          <li>
            <a href="/">
              <span
                className="nav-text uk-margin-small-right"
                uk-icon="icon: sign-out; ratio: 1.1"
              ></span>
              <span className="nav-text">Salir</span>
            </a>
          </li>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
