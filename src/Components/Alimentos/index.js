import React, { Component } from "react";
import TablaAlimentos from "../Alimentos/tablaAlimentos";
import { getAlimentos } from "../../Services/alimentosService";
import { getMisAlimentos } from "../../Services/alimentosService";
import SideNavbar from "../Navbar/SideNavbar";
import { Link } from "react-router-dom";
class Alimentos extends Component {
  state = {
    alimentos: [],
    misAlimentos: [],
  };

  componentDidMount() {
    getAlimentos().then((res) => {
      const { result: alimentos } = res.data;
      this.setState({ alimentos });
    });

    getMisAlimentos().then((res) => {
      const { result: misAlimentos } = res.data;
      this.setState({ misAlimentos });
    });
  }

  render() {
    const isAliments = this.props.location.pathname === "/alimentos";
    return (
      <div>
        <div className="main-wrapper">
          <SideNavbar />
          <div>
            {isAliments ? (
              <div className="wrapper-alimentos">
                <h4 className=" forms-title ver-mas uk-padding-small uk-light uk-text-uppercase uk-text-bold">
                  Lista de alimentos
                </h4>
                {this.state.alimentos.length > 0 ? (
                  this.state.alimentos.map((alimento, index) => (
                    <TablaAlimentos key={index} {...alimento} />
                  ))
                ) : (
                  <div className="food-not-found">
                    <div
                      className="uk-alert-primary uk-margin-top"
                      uk-alert="true"
                    >
                      <p>No hay alimentos.</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <h4 className=" forms-title ver-mas uk-padding-small uk-light uk-text-uppercase uk-text-bold">
                  Lista de alimentos
                </h4>
                {this.state.misAlimentos.length > 0 ? (
                  this.state.misAlimentos.map((misAlimentos, index) => (
                    <TablaAlimentos key={index} {...misAlimentos} />
                  ))
                ) : (
                  <div className="food-not-found">
                    <div
                      className="uk-alert-primary uk-margin-top"
                      uk-alert="true"
                    >
                      <p>No hay alimentos.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="food-not-found">
              <h4 className="forms-title uk-margin-small uk-margin-top">
                ¿No encuentras lo que buscas?{" "}
              </h4>
              <Link to="/alimentos/crear-alimento">
                <button className="btn">Crear alimento</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Alimentos;
