import React from "react";
import { Switch, Route } from "react-router-dom";
import Alimentos from "./Components/Alimentos"
import AuthForm from "./Components/AuthForm";
import LandingPage from "./Components/Landing";
import AlimentoForm from "./Components/Forms/AlimentoForm/index";
import RecetaForm from "./Components/Forms/RecetaForm/index";
import ActualizarUsuarioForm from "./Components/Forms/ActualizarUsuarioForm/index";

const Routes = () => (
    <Switch>
        <Route exact path="/landing" component={LandingPage}/>
        <Route exact path="/alimentos" component={Alimentos}/> 
        <Route exact path="/alimentos/crear-alimento" component={AlimentoForm}/> 
        {/* <Route exact path="/recetas" component={}/>  */}
        <Route exact path="/recetas/crear-receta" component={RecetaForm}/> 
        <Route exact path="/users/actualizar/:id" component={ActualizarUsuarioForm}/> 
        <Route exact path="/login" component={AuthForm}/> 
        <Route exact path="/signup" component={AuthForm}/> 
    </Switch>
)

export default Routes;