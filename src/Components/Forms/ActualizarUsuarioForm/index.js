import React, { Component } from "react";

class ActualizarUsuarioForm extends Component {
  state = {
    alimento: {},
  };

  handleChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <section className="uk-section">
        <h4 className=" forms-title ver-mas uk-padding-small uk-light uk-text-uppercase uk-text-bold">
          Actualizar información
        </h4>
        <div className="uk-container uk-flex uk-flex-between">
          <img
            className="form-image container form-shadow"
            src="../../user-update.svg"
            alt="user update"
          />

          <div className="uk-width-1-2 form-shadow">
            <form className="uk-width-1-1 uk-padding">
              {/*Nombre*/}
              <div className="uk-width-1-1 uk-text-left">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left uk-margin-right"
                  htmlFor="nombre"
                >
                  Nombre:
                </label>
                <div className="uk-form-controls">
                  <input
                    onChange={this.handleChange}
                    name="nombre"
                    className="uk-input"
                    id="nombre"
                    type="text"
                    placeholder="Nombre..."
                  />
                </div>
              </div>

              <div className="uk-form-horizontal uk-margin">
                {/* Sexo */}
                <div className="uk-margin uk-text-left ">
                  <label className="uk-form-label" htmlFor="sexo">
                    Sexo:
                  </label>
                  <div className="uk-form-controls uk-width-1-2">
                    <select
                      className="uk-select"
                      id="sexo"
                      name="sexo"
                      onChange={this.handleChange}
                    >
                      <option defaultValue="true">Sexo</option>
                      <option>Femenino</option>
                      <option>Masculino</option>
                    </select>
                  </div>
                </div>

                {/* Nivel de actividad */}
                <div className="uk-margin uk-text-left">
                  <label className="uk-form-label" htmlFor="nivel_de_actividad">
                    Nivel de actividad:
                  </label>
                  <div className="uk-form-controls uk-width-1-2">
                    <select
                      className="uk-select"
                      id="nivel_de_actividad"
                      name="nivel_de_actividad"
                      onChange={this.handleChange}
                    >
                      <option defaultValue="true">Nivel de actividad</option>
                      <option>Bajo</option>
                      <option>Moderado</option>
                      <option>Alto</option>
                      <option>Muy alto</option>
                      <option>Hiperactivo</option>
                    </select>
                  </div>
                </div>

                {/* Objetivo */}
                <div className="uk-margin uk-text-left">
                  <label className="uk-form-label" htmlFor="objetivo">
                    Objetivo:
                  </label>
                  <div className="uk-form-controls uk-width-1-2">
                    <select
                      className="uk-select"
                      id="objetivo"
                      name="objetivo"
                      onChange={this.handleChange}
                    >
                      <option defaultValue="true">Objetivo</option>
                      <option>Perder peso</option>
                      <option>Perder peso lentamente</option>
                      <option>Mantener peso</option>
                      <option>Aumentar peso lentamente</option>
                      <option>Aumentar peso</option>
                    </select>
                  </div>
                </div>

                {/* Número de comidas */}
                <div className="uk-margin uk-text-left">
                  <label className="uk-form-label" htmlFor="numero_de_comidas">
                    Número de comidas:
                  </label>
                  <div className="uk-form-controls uk-width-1-2">
                    <select
                      className="uk-select"
                      id="numero_de_comidas"
                      name="numero_de_comidas"
                      onChange={this.handleChange}
                    >
                      <option defaultValue="true">Número de comidas</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                {/* Tipo de dieta */}
                <div className="uk-margin uk-text-left">
                  <label className="uk-form-label" htmlFor="tipo_de_dieta">
                    Tipo de dieta:
                  </label>
                  <div className="uk-form-controls uk-width-1-2">
                    <select
                      className="uk-select"
                      id="tipo_de_dieta"
                      name="tipo_de_dieta"
                      onChange={this.handleChange}
                    >
                      <option defaultValue="true">Tipo de dieta</option>
                      <option>Estándar</option>
                      <option>Equilibrada</option>
                      <option>Baja en grasas</option>
                      <option>Alta en proteínas</option>
                      <option>Cetogénica</option>
                    </select>
                  </div>
                </div>
                {/* Edad */}
                <div className="uk-margin uk-text-left">
                  <label className="uk-form-label" htmlFor="edad">
                    Edad:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      onChange={this.handleChange}
                      name="edad"
                      className="uk-input"
                      id="edad"
                      type="number"
                      placeholder="Edad"
                    />
                  </div>
                </div>

                {/* Altura */}
                <div className="uk-margin uk-text-left">
                  <label className="uk-form-label" htmlFor="altura_cm">
                    Altura:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      onChange={this.handleChange}
                      name="altura_cm"
                      className="uk-input"
                      id="altura_cm"
                      type="number"
                      placeholder="En cm"
                    />
                  </div>
                </div>

                {/* Peso */}
                <div className="uk-margin uk-text-left">
                  <label className="uk-form-label" htmlFor="peso_kg">
                    Peso:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      onChange={this.handleChange}
                      name="peso_kg"
                      className="uk-input"
                      id="peso_kg"
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
