import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login, signup } from "../../Services/authService";

class AuthForm extends Component {
  state = {
    user: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const isLogin = this.props.location.pathname === "/login";
    const action = isLogin ? login : signup;
    action(user).then((res) => {
      //convertimos al usuario en string para poder almacenarlo en localStorage (no recibe obj)
      const { user } = res.data;
      localStorage.setItem("user", JSON.stringify(user));
    });
  };
  handleChange = (e) => {
    let { user } = this.state;
    user = { ...user, [e.target.name]: e.target.value };
    this.setState({ user });
  };
  render() {
    const isLogin = this.props.location.pathname === "/login";
    return (
      <div className="container">
        <div className="forms-container">
          {isLogin ? (
            <div className="signin">
              <form onSubmit={this.handleSubmit} className="sign-in-form">
                <h2 className="title">Iniciar sesión</h2>

                {/* Correo */}
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    onChange={this.handleChange}
                    name="email"
                    id="email"
                    required={true}
                    type="email"
                    placeholder="Correo"
                  />
                </div>

                {/* Contraseña */}
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    onChange={this.handleChange}
                    name="password"
                    id="password"
                    required={true}
                    type="password"
                    placeholder="Contraseña"
                  />
                </div>
                <input type="submit" value="Login" className="btn solid" />
              </form>
            </div>
          ) : (
            <div className="signup">
              <div className="sign-up-form-container">
                <h2 className="title">Regístrate</h2>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                  {/* Nombre */}
                  <div className="input-field-signup">
                    <i className="fas fa-user"></i>
                    <input
                      onChange={this.handleChange}
                      name="nombre"
                      id="nombre"
                      type="text"
                      placeholder="Nombre"
                      required={true}
                    />
                  </div>

                  {/* Correo */}
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={this.handleChange}
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Correo"
                      required={true}
                    />
                  </div>

                  {/* Contraseña */}
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={this.handleChange}
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Contraseña"
                      required={true}
                    />
                  </div>

                  {/* Sexo */}
                  <select
                    className="input-field-signup option-text"
                    name="sexo"
                    id="sexo"
                    onChange={this.handleChange}
                    required={true}
                  >
                    <option defaultValue="true">Sexo</option>
                    <option>Femenino</option>
                    <option>Masculino</option>
                  </select>

                  {/* Edad */}
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={this.handleChange}
                      name="edad"
                      id="edad"
                      type="number"
                      placeholder="Edad"
                      required={true}
                    />
                  </div>

                  {/* Altura */}
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={this.handleChange}
                      name="altura_cm"
                      id="altura_cm"
                      type="number"
                      placeholder="Estatura en cm"
                      required={true}
                    />
                  </div>

                  {/* Peso */}
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={this.handleChange}
                      name="peso_kg"
                      id="peso_kg"
                      type="number"
                      placeholder="Peso en kg"
                      required={true}
                    />
                  </div>

                  {/* Nivel de actividad */}
                  <select
                    className="input-field-signup option-text"
                    name="nivel_de_actividad"
                    id="nivel_de_actividad"
                    onChange={this.handleChange}
                    required={true}
                  >
                    <option defaultValue="true">Actividad</option>
                    <option>Bajo</option>
                    <option>Moderado</option>
                    <option>Alto</option>
                    <option>Muy alto</option>
                    <option>Hiperactivo</option>
                  </select>

                  {/* Objetivo */}
                  <select
                    className="input-field-signup option-text"
                    name="objetivo"
                    id="objetivo"
                    onChange={this.handleChange}
                    required={true}
                  >
                    <option defaultValue="true">Objetivo</option>
                    <option>Perder peso</option>
                    <option>Perder peso lentamente</option>
                    <option>Mantener peso</option>
                    <option>Aumentar peso lentamente</option>
                    <option>Aumentar peso</option>
                  </select>

                  {/* Numero de comidas */}
                  <select
                    className="input-field-signup option-text"
                    name="numero_de_comidas"
                    id="numero_de_comidas"
                    onChange={this.handleChange}
                    required={true}
                  >
                    <option defaultValue="true">Comidas</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  {/* Tipo de dieta */}
                  <div className="uk-flex-center uk-flex-column">
                    <select
                      className="input-field-signup uk-width-1-1 uk-margin-remove-left option-text"
                      name="tipo_de_dieta"
                      id="tipo_de_dieta"
                      onChange={this.handleChange}
                      required={true}
                    >
                      <option defaultValue="true">Dieta</option>
                      <option>Estandar</option>
                      <option>Equilibrada</option>
                      <option>Baja en grasas</option>
                      <option>Alta en proteinas</option>
                      <option>Cetogenica</option>
                    </select>
                    <button type="submit" className="btn solid">
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="panels-container">
          {isLogin ? (
            <div className="panel left-panel">
              <div className="content">
                <h3>¿Aún no tienes cuenta?</h3>
                <p className="uk-text-justify">
                  Calcula tus calorías y registra tu diario de alimentos de
                  forma fácil y sencilla. ¡Come lo que quieras! Siempre
                  respetando tus objetivos de carbohidratos, proteínas y grasas.
                </p>
                <Link to="/signup">
                  <button className="btn transparent" id="sign-up-btn">
                    Regístrate
                  </button>
                </Link>
              </div>
              <img
                src="../registrarse.svg"
                className="image"
                alt="registrarse"
              />
            </div>
          ) : (
            <div className="panel right-panel">
              <div className="content">
                <h3>¿Tienes una cuenta?</h3>
                <p>¡Bienvenido de nuevo!</p>
                <Link to="/login">
                  <button className="btn transparent" id="sign-in-btn">
                    Iniciar sesión
                  </button>
                </Link>
              </div>
              <img src="../login.svg" className="image" alt="iniciar sesion" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AuthForm;
