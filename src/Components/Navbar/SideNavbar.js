import React from "react";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="uk-flex uk-padding-remove uk-margin-remove">
      <nav
        className="uk-nav side-navbar-container uk-padding-bottom"
        uk-navbar="true"
        uk-height-viewport="true"
      >
        <ul className="uk-text-left uk-margin-small-left uk-margin-right uk-padding">
          <br></br>
          <li>
            <Link to="/users/my-info">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: user; ratio: 1.1"
              ></span>
              <span>Perfil</span>
            </Link>
          </li>
          <hr></hr>

          <li>
            <Link to="/alimentos/mis-alimentos">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: list; ratio: 1.1"
              ></span>
              <span>Mis alimentos</span>
            </Link>
          </li>
          <hr></hr>

          <li>
            <Link to="/alimentos">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: database; ratio: 1.1"
              ></span>
              <span>Base de alimentos</span>
            </Link>
          </li>
          <hr></hr>

        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
