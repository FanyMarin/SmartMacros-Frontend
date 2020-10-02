import React, { Component } from "react";
import MiInformacion from "./MiInformacion";
import Resultados from "./Resultados";
import SideNavbar from "../Navbar/SideNavbar";
import { Link } from "react-router-dom";
import { getMyInfo, getMyResults } from "../../Services/perfilService";

class Perfil extends Component {
  state = {
    miInfo: [],
    misResultados: [],
  };

  componentDidMount() {
    getMyInfo().then((res) => {
      const { result: miInfo } = res.data;
      this.setState({ miInfo });
    });

    getMyResults().then((res) => {
      const { result: misResultados } = res.data;
      this.setState({ misResultados });
    });
  }

  render() {
    return (
      <div className="uk-flex uk-flex-between">
        <SideNavbar />
        <div className="profile-main">
          <div className="uk-padding uk-padding-remove-bottom">
            <h1 className="title uk-text-success uk-text-bold">Mi perfil</h1>
            <h4 className=" forms-title ver-mas uk-padding-small uk-margin-small-bottom uk-light uk-text-uppercase uk-text-bold">
              Resultados
            </h4>
            <hr></hr>
            {/* {this.state.misResultados.map((misResultados, index) => (
              <Resultados key={index} {...misResultados} />
            ))} */}
            <Resultados />
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
              {this.state.miInfo.map((miInfo, index) => (
                <MiInformacion key={index} {...miInfo} />
              ))}
              {/* // <MiInformacion /> */}
              <img
                src="../perfil.svg"
                className="uk-width-1-3"
                alt="Disfruta"
              />
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
  }
}

export default Perfil;
