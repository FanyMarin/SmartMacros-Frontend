import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, logout }) => {
  return (
    <header>
      <nav className="navbar-wrapper">
        {user._id ? (
          <div>
            <ul>
              <li>
                <Link to="/users/my-info">Smart Macros</Link>
              </li>
            </ul>
          </div>
        ) : (
          <ul>
            <li>
              <Link to="/">Smart Macros</Link>
            </li>
          </ul>
        )}

        <div>
          {user._id ? (
            <ul className="navbar-right">
              <li>
                <Link to="/users/my-info">Perfil</Link>
              </li>
              <li onClick={logout}>Logout</li>
            </ul>
          ) : (
            <ul className="navbar-right">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
