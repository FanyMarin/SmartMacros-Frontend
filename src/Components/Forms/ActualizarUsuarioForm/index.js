import React, { Component } from "react";

class ActualizarUsuarioForm extends Component {
  state = {
    alimento: {},
  };

  render() {
    return (
      <section className="uk-section">
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-width-1-2 form-shadow">
            <h4 className=" forms-title ver-mas uk-padding-small uk-light uk-text-uppercase uk-text-bold">
              Actualizar información
            </h4>
            <form className="uk-width-1-1">
              {/*Nombre*/}
              <div className="uk-width-1-1 uk-text-left">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left"
                  htmlFor="form-stacked-text"
                >
                  Nombre:
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="Nombre..."
                  />
                </div>
              </div>
              {/*Información nutricional */}
              <div className="uk-form-horizontal uk-margin">
         
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Sexo:
                  </label>
                  <div className="uk-form-controls uk-width-1-2">
                    <select className="uk-select" id="form-horizontal-select">
                      <option>Femenino</option>
                      <option>Masculino</option>
                    </select>
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Nivel de actividad:
                  </label>
                  <div className="uk-form-controls uk-width-1-2">
                    <select className="uk-select" id="form-horizontal-select">
                      <option>Bajo</option>
                      <option>Moderado</option>
                      <option>Alto</option>
                      <option>Muy alto</option>
                      <option>Hiperactivo</option>
                    </select>
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Objetivo:
                  </label>
                  <div className="uk-form-controls uk-width-1-2">
                    <select className="uk-select" id="form-horizontal-select">
                      <option>Perder peso</option>
                      <option>Perder peso lentamente</option>
                      <option>Mantener peso</option>
                      <option>Aumentar peso lentamente</option>
                      <option>Aumentar peso</option>
                    </select>
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Número de comidas:
                  </label>
                  <div className="uk-form-controls uk-width-1-2">
                    <select className="uk-select" id="form-horizontal-select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Tipo de dieta:
                  </label>
                  <div className="uk-form-controls uk-width-1-2">
                    <select className="uk-select" id="form-horizontal-select">
                      <option>Estándar</option>
                      <option>Equilibrada</option>
                      <option>Baja en grasas</option>
                      <option>Alta en proteínas</option>
                      <option>Cetogénica</option>
                    </select>
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Edad:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="form-horizontal-text"
                      type="number"
                      placeholder="Edad"
                    />
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Altura:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="form-horizontal-text"
                      type="number"
                      placeholder="En cm"
                    />
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Peso:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="form-horizontal-text"
                      type="number"
                      placeholder="En kg"
                    />
                  </div>
                </div>
              </div>
              <button className="ver-mas uk-padding-small uk-light btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ActualizarUsuarioForm;
