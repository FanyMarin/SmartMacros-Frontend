import React from "react";
import MiInformacion from "./MiInformacion";
import Resultados from "./Resultados";
import SideNavbar from "../Navbar/SideNavbar";
import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <div className="uk-flex uk-flex-between">
        <SideNavbar />

      <div className="profile-main">
        <div className="uk-padding uk-padding-remove-bottom">
          <h4 className=" forms-title ver-mas uk-padding-small uk-margin-small-bottom uk-light uk-text-uppercase uk-text-bold">
            Resultados
          </h4>
          <hr></hr>
          <Resultados/>
          <Link to="">
            <button className="btn">Actualizar</button>
          </Link>
          <hr></hr>
        </div>
        <div className="uk-padding uk-padding-small-top">
          <h4 className=" forms-title ver-mas uk-padding-small uk-margin-small-bottom uk-light uk-text-uppercase uk-text-bold">
            Mi información
          </h4>
          <div className="main-my-info">
            <MiInformacion className="my-info"/>
            <img src="../perfil.svg" className="uk-width-1-3" alt="Disfruta" />
          </div>
          <div className="btn-wrapper">
            <Link to="/users/actualizar/:id">
              <button className="btn">Actualizar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;