import React, { Component } from "react";
import Card from "../Card";
import { getAlimentos } from "../../Services/alimentosService";
import { getMisAlimentos } from "../../Services/alimentosService";
import SideNavbar from "../Navbar/SideNavbar";
class Alimentos extends Component {
  state = {
    alimentos: [],
    misAlimentos: [],
  };

  //Tengo que hacer la peticion de los alimentos de la db en componentDidMount(), porque necesito
  //esa informacion antes de que se renderice la vista de los alimentos:
  componentDidMount() {
    getAlimentos().then((res) => {
      console.log(res);
      //Vamos a sacar lo que hay en la llave de results de la consola, le daremos el alias de products y lo setearemos en el estado
      const { result: alimentos } = res.data;
      this.setState({ alimentos });
    });

    getMisAlimentos().then((res) => {
      console.log(res);
      //Vamos a sacar lo que hay en la llave de results de la consola, le daremos el alias de products y lo setearemos en el estado
      const { result: misAlimentos } = res.data;
      this.setState({ misAlimentos });
    });
  }

  render() {
    const isAliments = this.props.location.pathname === "/alimentos";
    return (
      <section className="uk-section uk-margin-remove uk-padding-remove">
        <div className="uk-container uk-flex uk-padding-remove uk-margin-remove">
          <SideNavbar />
          {isAliments ? (
            <div className="uk-flex-center uk-margin-large-left uk-margin-large-bottom uk-margin-remove-right uk-grid uk-grid-small uk-grid-match uk-child-width-1-3">
              {this.state.alimentos.length > 0 ? (
                this.state.alimentos.map((alimento, index) => (
                  <Card key={index} {...alimento} />
                ))
              ) : (
                <div className="uk-alert-primary" uk-alert="true">
                  <p>No hay alimentos.</p>
                  <button>Crear alimento</button>
                </div>
              )}
            </div>
          ) : (
            <div className="uk-flex-center uk-margin-large-left uk-margin-large-bottom uk-margin-remove-right uk-grid uk-grid-small uk-grid-match uk-child-width-1-3">
              {this.state.misAlimentos.length > 0 ? (
                this.state.misAlimentos.map((misAlimentos, index) => (
                  <Card key={index} {...misAlimentos} />
                ))
              ) : (
                <div>
                  <div className="uk-alert-primary" uk-alert="true">
                    <p>No hay alimentos.</p>
                  </div>
                  <button>Crear alimento</button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Alimentos;
