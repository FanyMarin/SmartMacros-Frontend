import React, { Component } from "react";

class AlimentoForm extends Component {
  state = {
    alimento: {},
  };

  render() {
    return (
      <section className="uk-section">
        <h4 className=" forms-title ver-mas uk-padding-small uk-light uk-text-uppercase uk-text-bold">
          Registrar alimento
        </h4>
        <div className="uk-container uk-flex uk-flex-between">
        <img
            className="form-image container form-shadow uk-padding "
            src="../../alimento.svg"
            alt="user update"
          />
          <div className="uk-width-1-2 form-shadow">
            <form className="uk-width-1-1 uk-padding">
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
              {/* Descripción*/}
              <div className="uk-margin uk-width-1-1 uk-text-left uk-margin-remove-bottom">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left"
                  htmlFor="form-stacked-text"
                >
                  Descripción:
                </label>
                <div>
                  <textarea
                    className="uk-textarea"
                    rows="5"
                    placeholder="Descripción del alimento (opcional)..."
                  ></textarea>
                </div>
              </div>
              {/* Marca */}
              <div className="uk-margin uk-width-1-1 uk-text-left uk-margin-remove-bottom">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left"
                  htmlFor="form-stacked-text"
                >
                  Marca:
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="Marca del alimento (opcional)..."
                  />
                </div>
              </div>
              {/* Cantidad */}
              <div className="uk-margin uk-width-1-1 uk-text-left">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left "
                  htmlFor="form-stacked-text"
                >
                  Cantidad:
                </label>
                <div className="uk-grid-small" uk-grid="true">
                  <div className="uk-width-1-2@s">
                    <input
                      className="uk-input"
                      type="text"
                      placeholder="Porción"
                    />
                  </div>
                  <div className="uk-form-controls uk-width-1-2">
                    <select className="uk-select" id="form-horizontal-select">
                      <option>gr</option>
                      <option>ml</option>
                    </select>
                  </div>
                </div>
              </div>
              {/*Información nutricional */}
              <div className="uk-form-horizontal uk-margin">
                <p className="uk-text-emphasis forms-font">
                  Información nutricional
                </p>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Grasas:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="form-horizontal-text"
                      type="number"
                      placeholder="gr"
                    />
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Carbohidratos:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="form-horizontal-text"
                      type="number"
                      placeholder="gr"
                    />
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Proteínas:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="form-horizontal-text"
                      type="number"
                      placeholder="gr"
                    />
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label
                    className="uk-form-label"
                    htmlFor="form-horizontal-text"
                  >
                    Calorías:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="form-horizontal-text"
                      type="number"
                      placeholder="kcal (opcional)"
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

export default AlimentoForm;
