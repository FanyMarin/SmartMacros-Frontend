import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, logout }) => {
  return (
    <header>
      <nav className="navbar-wrapper"
        // className="uk-navbar-container uk-navbar-transparent navbar-container"
        // uk-navbar="true"
      >
        {/* {user._id ? (
          <div className="uk-navbar-left uk-background-contain uk-background-muted">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link
                  to="/users/my-info"
                  className="uk-logo uk-background-contain"
                >
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
        ) : null} */}

        {user._id ? (
          <div>
            <ul>
              <li>
                <Link to="/">Smart Macros</Link>
              </li>
            </ul>
          </div>
        ) : 
            <ul>
              <li>
                <Link to="/">Smart Macros</Link>
              </li>
            </ul>
        }

        <div>
          {user._id ? (
            <ul className="navbar-right">
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
              <li onClick={logout}>Logout</li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
