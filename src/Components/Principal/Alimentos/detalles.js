import React, { Component } from "react";
import Title from "../../Common/Title";
import Button from "../../Common/Button";
import SideNavbar from "../../Common/SideNavbar";
import { getAlimentoDetalles } from "../../../Services/alimentosService";
import { Link } from "react-router-dom";
import TablaDetalles from "./tablaDetalles";

class Detalles extends Component {
  state = {
    detalles: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      getAlimentoDetalles(id).then((res) => {
        const { result: detalles } = res.data;
        this.setState({ detalles });
      });
    }
  }

  render() {
    let { detalles } = this.state;

    return (
      <div className="uk-flex uk-flex-between">
        <SideNavbar />
        <div className="profile-main">
          <div>
            <Title title="Detalles del alimento" />
            <div className="main-my-info">
              <TablaDetalles
                Nombre={detalles.Nombre}
                Descripcion={detalles.Descripcion}
                Marca={detalles.Marca}
                Porcion={detalles.Porcion}
                Unidad_de_medida={detalles.Unidad_de_medida}
                Grasas={detalles.Grasas}
                Carbohidratos={detalles.Carbohidratos}
                Proteinas={detalles.Proteinas}
                Calorias_kcal={detalles.Calorias_kcal}
              />
              <img
                src="../hamburger.svg"
                className="uk-width-1-3"
                alt="Disfruta"
              />
            </div>
          </div>
          <Link to="/alimentos">
            <Button option="Regresar" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Detalles;
