import React, { Component } from "react";
import Card from "../Card";
import { getAlimentos } from "../../Services/alimentosService";

class Alimentos extends Component {
  state = {
    alimentos: [],
  };

  //Tengo que hacer la peticion de los alimentos de la db en componentDidMount(), porque necesito
  //esa informacion antes de que se renderice la vista de los alimentos:
  componentDidMount() {
      getAlimentos().then(res => {
          console.log(res)
      })
  }

  render() {
    return (
      <section className="uk-section">
        <div className="uk-container">
          <div className="uk-grid">
            {this.state.alimentos.length > 0 ? (
              this.state.alimentos.map((alimento, index) => (
                <Card key={index} {...alimento} />
              ))
            ) : (
              <div className="uk-alert-primary" uk-alert="true">
                <p>No hay alimentos.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Alimentos;
