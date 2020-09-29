import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login, signup } from "../../Services/authService"

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
    localStorage.setItem("user", JSON.stringify(user))
    })
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
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    onChange={this.handleChange}
                    name="email"
                    required={true}
                    type="email"
                    placeholder="Correo"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    onChange={this.handleChange}
                    name="password"
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
                  <div className="input-field-signup">
                    <i className="fas fa-user"></i>
                    <input
                      onChange={this.handleChange}
                      name="nombre"
                      //   required={true}
                      type="text"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={this.handleChange}
                      name="email"
                      //   required={true}
                      type="email"
                      placeholder="Correo"
                    />
                  </div>
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={this.handleChange}
                      name="password"
                      //   required={true}
                      type="password"
                      placeholder="Contraseña"
                    />
                  </div>
                  <select
                    className="input-field-signup"
                    name="sexo"
                    required={true}
                    // id="genero"
                    onChange={this.handleChange}
                  >
                    <option defaultValue="true">Sexo</option>
                    <option>Femenino</option>
                    <option>Masculino</option>
                  </select>
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={this.handleChange}
                      name="edad"
                      //   required={true}
                      type="number"
                      placeholder="Edad"
                    />
                  </div>
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={this.handleChange}
                      name="altura_cm"
                      //   required={true}
                      type="number"
                      placeholder="Estatura en cm"
                    />
                  </div>
                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={this.handleChange}
                      name="peso_kg"
                      //   required={true}
                      type="number"
                      placeholder="Peso en kg"
                    />
                  </div>

                  <select
                    className="input-field-signup"
                    name="nivel_de_actividad"
                    // required={true}
                    // id="actividad"
                    onChange={this.handleChange}
                  >
                    <option defaultValue="true">Nivel de actividad</option>
                    <option>Bajo</option>
                    <option>Moderado</option>
                    <option>Alto</option>
                    <option>Muy alto</option>
                    <option>Hiperactivo</option>
                  </select>

                  <select
                    className="input-field-signup"
                    name="objetivo"
                    // required={true}
                    // id="finalidad"
                    onChange={this.handleChange}
                  >
                    <option defaultValue="true">Objetivo</option>
                    <option>Perder peso</option>
                    <option>Perder peso lentamente</option>
                    <option>Mantener peso</option>
                    <option>Aumentar peso lentamente</option>
                    <option>Aumentar peso</option>
                  </select>

                  <select
                    className="input-field-signup"
                    name="numero_de_comidas"
                    // required={true}
                    // id="cuantas_comidas"
                    onChange={this.handleChange}
                  >
                    <option defaultValue="true">Número de comidas</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <select
                    className="input-field-signup"
                    name="tipo_de_dieta"
                    // required={true}
                    // id="dieta"
                    onChange={this.handleChange}
                  >
                    <option defaultValue="true">Tipo de dieta</option>
                    <option>Estandar</option>
                    <option>Equilibrada</option>
                    <option>Baja en grasas</option>
                    <option>Alta en proteinas</option>
                    <option>Cetogenica</option>
                  </select>

                  <div className="input-field-signup">
                    <i className="fas fa-envelope"></i>
                    <input onChange={this.handleChange} name="foto_de_perfil" required={true} type="text" placeholder="Foto de perfil" />
                  </div>
                  <input type="submit" value="Registrarse" className="btn solid" />
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
