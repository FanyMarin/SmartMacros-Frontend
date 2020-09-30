import React, { Component } from "react";

class RecetaForm extends Component {
  state = {
    receta: {},
  };

  handleSubmit = (e) => {
    //Para evitar que se refresque el navegador (comportamiento default de una form)
    e.preventDefault();
  }

  handleChange = (e) => {
    let { receta } = this.state;
    receta = { ...receta, [e.target.name]: e.target.value };
    this.setState({ receta });
    console.log(receta);
  };

  render() {
    return (
      <section className="uk-section">
        <h4 className=" forms-title ver-mas uk-padding-small uk-light uk-text-uppercase uk-text-bold">
          Crear receta
        </h4>
        <div className="uk-container uk-flex uk-flex-between">
          <img
            className="form-image container form-shadow"
            src="../../crear-receta.svg"
            alt="user update"
          />

          <div className="uk-width-1-2 form-shadow">
            <form className="uk-width-1-1 uk-padding" onSubmit={this.handleSubmit}>
              {/*Nombre*/}
              <div className="uk-width-1-1 uk-text-left">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left"
                  htmlFor="Nombre"
                >
                  Nombre:
                </label>
                <div className="uk-form-controls">
                  <input
                  onChange={this.handleChange}
                    name="Nombre"
                    className="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="Nombre..."
                  />
                </div>
              </div>

              {/* Descripción*/}
              <div className="uk-margin uk-width-1-1 uk-text-left uk-margin-remove-bottom">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left"
                  htmlFor="Descripcion"
                >
                  Descripción:
                </label>
                <div>
                  <textarea
                  onChange={this.handleChange}
                    name="Descripcion"
                    id="Descripcion"
                    className="uk-textarea"
                    rows="5"
                    placeholder="Descripción del alimento (opcional)..."
                  ></textarea>
                </div>
              </div>

              {/* Cantidad */}
              <div className="uk-margin uk-width-1-1 uk-text-left">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left "
                  htmlFor="Cantidad"
                >
                  Cantidad:
                </label>
                <div className="uk-grid-small" uk-grid="true">
                  <div className="uk-width-1-2@s">
                    <input
                    onChange={this.handleChange}
                      className="uk-input"
                      type="text"
                      placeholder="Porción"
                    />
                  </div>
                  <div className="uk-form-controls uk-width-1-2">
                    <select className="uk-select" id="Cantidad">
                      <option>gr</option>
                      <option>ml</option>
                      <option>contenedor</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Descripción*/}
              <div className="uk-margin uk-width-1-1 uk-text-left uk-margin-remove-bottom">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left"
                  htmlFor="form-stacked-text"
                >
                  A;adir alimento:
                </label>
                <div>
                  <textarea
                    className="uk-textarea"
                    rows="5"
                    placeholder="Como le hago para que me aparezca un boton de a;adir alimento conforme voy agregando y que ese boton me inserte un alimento. Igual para los pasos de la receta"
                  ></textarea>
                </div>
              </div>
              <div className="uk-form-horizontal uk-margin"></div>
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

export default RecetaForm;
