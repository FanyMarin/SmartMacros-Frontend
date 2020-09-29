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
          //Vamos a sacar lo que hay en la llave de results de la consola, le daremos el alias de products y lo setearemos en el estado
        const { result: alimentos} = res.data;
        this.setState({ alimentos })
      })
  }

  render() {
    return (
      <section className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-child-width-1-3">
            {this.state.alimentos.length > 0 ? (
              this.state.alimentos.map((alimento, index) => (
                <Card key={index} {...alimento} />
              ))
            ) : (
              <div className="uk-alert-primary" uk-alert="true">
                <p>No hay alimentos.</p>
                <p>PON BOTON PARA CREAR ALIMENTO QUE NOS LLEVE A SU FORMULARIO</p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Alimentos;
