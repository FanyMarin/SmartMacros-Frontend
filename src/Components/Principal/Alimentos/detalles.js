import React, { Component } from "react";
import Title from "../../Common/Title";
import Button from "../../Common/Button";
import SideNavbar from "../../Common/SideNavbar";
import { getAlimentoDetalles, deleteAlimento } from "../../../Services/alimentosService";
import { Link } from "react-router-dom";
import TablaDetalles from "./tablaDetalles";
import Swal from "sweetalert2";

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

  handleDelete = () => {
    const { id } = this.props.match.params;
    deleteAlimento(id).then((res) => {
      Swal.fire({
        title: "Alimento eliminado",
        confirmButtonText: "OK",
      });
    })
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
          <div className="uk-padding">
            <Link className="uk-padding-small" to="/alimentos">
              <Button option="Regresar" />
            </Link>
            <Link
              className="uk-padding-small"
              to={`/alimentos/actualizar/${detalles._id}`}
            >
              <Button option="Actualizar" />
            </Link>
            <Link onClick={this.handleDelete} className="uk-padding-small" to="/alimentos">
              <Button option="Eliminar" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Detalles;
