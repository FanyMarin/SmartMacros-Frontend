import React, { Component } from "react";
import { createAlimento } from "../../Services/alimentosService";
import SideNavbar from "../Common/SideNavbar";
import Title from "../Common/Title";
import Button from "../Common/Button";
import Swal from "sweetalert2";

class AlimentoForm extends Component {
  state = {
    alimento: {},
  };

  handleChange = (e) => {
    let { alimento } = this.state;
    alimento = { ...alimento, [e.target.name]: e.target.value };
    this.setState({ alimento });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { alimento } = this.state;
    createAlimento(alimento).then((res) => {
      Swal.fire({
        title: "Alimento creado con éxito 🎉",
        text: `Ir a ver detalles`,
        confirmButtonText: "OK",
      });
    });
  };

  render() {
    const isCrearAlimento =
      this.props.location.pathname === "/alimentos/crear-alimento";
    return (
      <section className="uk-section uk-margin-remove uk-padding-remove">
        <div className="uk-container uk-flex uk-flex-between uk-padding-remove uk-margin-remove">
          <SideNavbar />
          <img
            className="form-image"
            src="../../alimento.svg"
            alt="user update"
          />

          <div className="uk-width-1-2 form-shadow">
            {isCrearAlimento ? (
              <Title title="Registrar alimento" />
            ) : (
              <Title title="Actualizar alimento" />
            )}
            <form
              className="uk-width-1-1 uk-padding"
              onSubmit={this.handleSubmit}
            >
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

              {/* Porcion */}
              <div className="uk-margin uk-width-1-1 uk-text-left">
                <label
                  className="uk-text-emphasis forms-font uk-margin-left "
                  htmlFor="Porcion"
                >
                  Cantidad:
                </label>
                <div className="uk-grid-small" uk-grid="true">
                  <div className="uk-width-1-2@s">
                    <input
                      onChange={this.handleChange}
                      name="Porcion"
                      className="uk-input"
                      type="number"
                      placeholder="Porción"
                    />
                  </div>
                  <div className="uk-form-controls uk-width-1-2">
                    <select
                      name="Unidad_de_medida"
                      className="uk-select"
                      id="Unidad_de_medida"
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
                <p className="uk-text-emphasis forms-font"></p>
                <div className="uk-margin uk-text-left">
                  Información nutricional
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
                      placeholder="kcal"
                    />
                  </div>
                </div>
              </div>
              {isCrearAlimento ? (
                <Button option="crear" />
              ) : (
                <Button option="actualizar" />
              )}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default AlimentoForm;
