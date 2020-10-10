import React, { Component } from "react";
import MiInformacion from "./MiInformacion";
import SideNavbar from "../Navbar/SideNavbar";
import { Link } from "react-router-dom";
import { getMyInfo } from "../../Services/perfilService";

class Perfil extends Component {
  state = {
    miInfo: {},
  };

  componentDidMount() {
    getMyInfo().then((res) => {
      const { result: miInfo } = res.data;
      this.setState({ miInfo });
    });
  }

  render() {
    let { miInfo } = this.state;
    return (
      <div className="uk-flex uk-flex-between">
        <SideNavbar />
        <div className="profile-main">
          <div className="uk-padding uk-padding-remove-bottom">
            <h1 className="title uk-text-success uk-text-bold">Mi perfil</h1>
          </div>
          <div>
            <h4 className=" forms-title ver-mas uk-padding-small uk-margin-small-bottom uk-light uk-text-uppercase uk-text-bold">
              Mi información
            </h4>
            <div className="main-my-info">
              <MiInformacion
                nombre={miInfo.nombre}
                sexo={miInfo.sexo}
                nivel_de_actividad={miInfo.nivel_de_actividad}
                objetivo={miInfo.objetivo}
                numero_de_comidas={miInfo.numero_de_comidas}
                tipo_de_dieta={miInfo.tipo_de_dieta}
                edad={miInfo.edad}
                altura_cm={miInfo.altura_cm}
                peso_kg={miInfo.peso_kg}
              />
              <img
                src="../perfil.svg"
                className="uk-width-1-3"
                alt="Disfruta"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
