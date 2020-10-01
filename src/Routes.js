import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/AuthForm";
import LandingPage from "./Components/Landing";
import ActualizarUsuarioForm from "./Components/Forms/ActualizarUsuarioForm/index";
import Alimentos from "./Components/Alimentos"
import AlimentoForm from "./Components/Forms/AlimentoForm/index";
import Receta from "./Components/Recetas/index"
import RecetaForm from "./Components/Forms/RecetaForm/index";
import Perfil from "./Components/Perfil/index"

const Routes = () => (
    <Switch>
        <Route exact path="/login" component={AuthForm}/> 
        <Route exact path="/signup" component={AuthForm}/> 
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/users/my-info" component={Perfil} />
        <Route exact path="/users/actualizar/:id" component={ActualizarUsuarioForm}/> 
        <Route exact path="/distribucion-macros/mis-resultados" component={() => <h1>Mis resultados</h1>} />
        <Route exact path="/registros/mis-registros" component={() => <h1>Mis registros</h1>} />
        <Route exact path="/alimentos" component={Alimentos}/> 
        <Route exact path="/alimentos/mis-alimentos" component={Alimentos} />
        <Route exact path="/alimentos/crear-alimento" component={AlimentoForm}/> 
        <Route exact path="/recetas" component={Receta} />
        <Route exact path="/recetas/crear-receta" component={RecetaForm}/> 
        <Route exact path="/recetas/mis-recetas" component={Receta} />

    </Switch>
)

export default Routes;