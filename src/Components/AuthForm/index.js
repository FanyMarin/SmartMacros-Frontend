import React, { Component } from "react";
import { Link } from "react-router-dom";

class AuthForm extends Component {
  state = {
      user: {}
  };

  handleSubmit = () => {};
  handleChange = (e) => {
      let { user } = this.state;
      user = { ...user, [e.target.name]: e.target.value};
      this.setState({ user });
  };
  render() {
    const isLogin = this.props.location.pathname === "/login";
    return (
      <div className="container">
        <div className="forms-container">
          {isLogin ? (
            <div className="signin">
              <form action="#" className="sign-in-form">
                <h2 className="title">Iniciar sesión</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Nombre" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Contraseña" />
                </div>
                <input type="submit" value="Login" className="btn solid" />
              </form>
            </div>
          ) : (
            <div className="signup">
              <div className="sign-up-form-container">
                <h2 className="title">Regístrate</h2>

                <form action="#" className="sign-up-form">
                  <div className="input-field-signup">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Nombre" />
                  </div>
                  <select
                    className="input-field-signup"
                    name="breed"
                    id="form-stacked-select"
                    onChange={this.handleChange}
                  >
                    <option selected="true">Sexo</option>
                    <option>Femenino</option>
                    <option>Masculino</option>
                  </select>
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Correo" />
                  </div>
                  <select
                    className="input-field-signup"
                    name="breed"
                    id="form-stacked-select"
                    onChange={this.handleChange}
                  >
                    <option selected="true">Nivel de actividad</option>
                    <option>Bajo</option>
                    <option>Moderado</option>
                    <option>Alto</option>
                    <option>Muy alto</option>
                    <option>Hiperactivo</option>
                  </select>
                  <div class="input-field-signup">
                    <i class="fas fa-envelope"></i>
                    <input type="password" placeholder="Contraseña" />
                  </div>
                  <select
                    className="input-field-signup"
                    name="breed"
                    id="form-stacked-select"
                    onChange={this.handleChange}
                  >
                    <option selected="true">Objetivo</option>
                    <option>Perder peso</option>
                    <option>Perder peso lentamente</option>
                    <option>Mantener peso</option>
                    <option>Aumentar peso lentamente</option>
                    <option>Aumentar peso</option>
                  </select>
                  <div class="input-field-signup">
                    <i class="fas fa-envelope"></i>
                    <input type="number" placeholder="Edad" />
                  </div>
                  <select
                    className="input-field-signup"
                    name="breed"
                    id="form-stacked-select"
                    onChange={this.handleChange}
                  >
                    <option selected="true">Número de comidas</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <div class="input-field-signup">
                    <i class="fas fa-envelope"></i>
                    <input type="number" placeholder="Peso en kg" />
                  </div>
                  <select
                    className="input-field-signup"
                    name="breed"
                    id="form-stacked-select"
                    onChange={this.handleChange}
                  >
                    <option selected="true">Tipo de dieta</option>
                    <option>Estandar</option>
                    <option>Equilibrada</option>
                    <option>Baja en grasas</option>
                    <option>Alta en proteinas</option>
                    <option>Cetogenica</option>
                  </select>
                  <div class="input-field-signup">
                    <i class="fas fa-envelope"></i>
                    <input type="number" placeholder="Estatura en cm" />
                  </div>
                  <div class="input-field-signup">
                    <i class="fas fa-envelope"></i>
                    <input type="image" placeholder="Foto de perfil" />
                  </div>
                </form>
                <input type="submit" value="Login" className="btn solid" />
              </div>
            </div>
          )}
        </div>

        <div className="panels-container">
          {isLogin ? (
            <div className="panel left-panel">
              <div className="content">
                <h3>¿Aún no tienes cuenta?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, ex ratione. Aliquid!
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
                <p>Bienvenido de nuevo!</p>
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
