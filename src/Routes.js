import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/Forms/AuthForm";
import LandingPage from "./Components/Principal/Landing";
import Alimentos from "./Components/Principal/Alimentos/index";
import AlimentoForm from "./Components/Forms/AlimentoForm";
import ActualizarAlimentoForm from "./Components/Forms/ActualizarAlimentoForm";
import Perfil from "./Components/Principal/Perfil/home";
import Detalles from "./Components/Principal/Alimentos/detalles";

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/users/my-info" component={Perfil} />
    <Route exact path="/alimentos" component={Alimentos} />
    <Route exact path="/alimentos/mis-alimentos" component={Alimentos} />
    <Route exact path="/alimentos/crear-alimento" component={AlimentoForm} />
    <Route exact path="/alimentos/actualizar/:id" component={ActualizarAlimentoForm} />
    <Route exact path="/alimentos/:id" component={Detalles} />
  </Switch>
);

export default Routes;
