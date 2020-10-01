import React, { Component } from "react";
import Card from "../Card";
import { getRecetas } from "../../Services/recetasService";
import { getMisRecetas } from "../../Services/recetasService";
import SideNavbar from "../Navbar/SideNavbar";

class Receta extends Component {
  state = {
    recetas: [],
    misRecetas: [],
  };

  //Tengo que hacer la peticion de los alimentos de la db en componentDidMount(), porque necesito
  //esa informacion antes de que se renderice la vista de los alimentos:
  componentDidMount() {
    getRecetas().then((res) => {
      console.log(res);
      //Vamos a sacar lo que hay en la llave de results de la consola, le daremos el alias de products y lo setearemos en el estado
      const { result: recetas } = res.data;
      this.setState({ recetas });
    });

    getMisRecetas().then((res) => {
      console.log(res);
      //Vamos a sacar lo que hay en la llave de results de la consola, le daremos el alias de products y lo setearemos en el estado
      const { result: misRecetas } = res.data;
      this.setState({ misRecetas });
    });
  }

  render() {
    const isRecetas = this.props.location.pathname === "/recetas";
    return (
      <section className="uk-section uk-margin-remove uk-padding-remove">
        <div className="uk-container uk-flex uk-padding-remove uk-margin-remove">
          <SideNavbar />
          {isRecetas ? (
            <div className="uk-flex-center uk-margin-large-left uk-margin-large-bottom uk-margin-remove-right uk-grid uk-grid-small uk-grid-match uk-child-width-1-3">
              {this.state.recetas.length > 0 ? (
                this.state.recetas.map((receta, index) => (
                  <Card key={index} {...receta} />
                ))
              ) : (
                <div className="uk-alert-primary" uk-alert="true">
                  <p>No hay recetas.</p>
                  <button>Crear receta</button>
                </div>
              )}
            </div>
          ) : (
            <div className="uk-flex-center uk-margin-large-left uk-margin-large-bottom uk-margin-remove-right uk-grid uk-grid-small uk-grid-match uk-child-width-1-3">
              {this.state.misRecetas.length > 0 ? (
                this.state.misRecetas.map((misRecetas, index) => (
                  <Card key={index} {...misRecetas} />
                ))
              ) : (
                <div>
                  <div className="uk-alert-primary" uk-alert="true">
                    <p>No hay recetas.</p>
                  </div>
                  <button>Crear recetas</button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Receta;
