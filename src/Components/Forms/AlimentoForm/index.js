import React, { Component } from "react";

class AlimentoForm extends Component {
  state = {
    alimento: {},
  };

  //Vamos a tener que aprender a manejar eventos que pasan en el input. Cada que escribimos en el
  //input va a haber un evento que se llama onChange, que nos va a permitir captar cual es el valor
  //que esta poniendo el usuario en el input y almacenarlo en el estado para despues mandarlo al
  //backend
  //Aqui es donde se va a empezar a hacer un FILTRO para cuando lo ocupes:
  //Cuando estas escribiendo en el hadleChange vas a ir filtrando todos los elementos con base en
  //el nombre. Entonces, se va a comparar "Si el nombre contiene las letras que te estoy pasando
  //entonces si lo agregas como un resultado posible"
  handleChange = (e) => {
    console.log(e.target.value);
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
                  htmlFor="Nombre"
                >
                  Nombre:
                </label>
                <div className="uk-form-controls">
                  <input
                    onChange={this.handleChange}
                    className="uk-input"
                    id="Nombre"
                    type="text"
                    name="Nombre"
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
                    className="uk-textarea"
                    rows="5"
                    id="Descripcion"
                    placeholder="Descripción del alimento (opcional)..."
                  ></textarea>
                </div>
              </div>

              {/* Marca */}
              <div className="uk-margin uk-width-1-1 uk-text-left uk-margin-remove-bottom">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left"
                  htmlFor="Marca"
                >
                  Marca:
                </label>
                <div className="uk-form-controls">
                  <input
                    onChange={this.handleChange}
                    name="Marca"
                    className="uk-input"
                    id="Marca"
                    type="text"
                    placeholder="Marca del alimento (opcional)..."
                  />
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
                      name="Cantidad"
                      className="uk-input"
                      type="text"
                      placeholder="Porción"
                    />
                  </div>
                  <div className="uk-form-controls uk-width-1-2">
                    <select
                      className="uk-select"
                      id="Cantidad"
                      onChange={this.handleChange}
                    >
                      <option defaultValue="true">Unidad de medida</option>
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
                  <label className="uk-form-label" htmlFor="Grasas">
                    Grasas:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      onChange={this.handleChange}
                      name="Grasas"
                      className="uk-input"
                      id="Grasas"
                      type="number"
                      placeholder="gr"
                    />
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label className="uk-form-label" htmlFor="Carbohidratos">
                    Carbohidratos:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      onChange={this.handleChange}
                      name="Carbohidratos"
                      className="uk-input"
                      id="Carbohidratos"
                      type="number"
                      placeholder="gr"
                    />
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label className="uk-form-label" htmlFor="Proteinas">
                    Proteínas:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      onChange={this.handleChange}
                      name="Proteinas"
                      className="uk-input"
                      id="Proteinas"
                      type="number"
                      placeholder="gr"
                    />
                  </div>
                </div>
                <div className="uk-margin uk-text-left">
                  <label className="uk-form-label" htmlFor="Calorias_kcal">
                    Calorías:
                  </label>
                  <div className="uk-form-controls">
                    <input
                      onChange={this.handleChange}
                      name="Calorias_kcal"
                      className="uk-input"
                      id="Calorias_kcal"
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
