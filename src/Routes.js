import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/Forms/AuthForm";
import LandingPage from "./Components/Principal/Landing";
import Alimentos from "./Components/Principal/Alimentos/index"
import AlimentoForm from "./Components/Forms/AlimentoForm";
import Perfil from "./Components/Principal/Perfil/home"

const Routes = () => (
    <Switch>
        <Route exact path="/login" component={AuthForm}/> 
        <Route exact path="/signup" component={AuthForm}/> 
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/users/my-info" component={Perfil} />
        <Route exact path="/alimentos" component={Alimentos}/> 
        <Route exact path="/alimentos/mis-alimentos" component={Alimentos} />
        <Route exact path="/alimentos/crear-alimento" component={AlimentoForm}/> 
    </Switch>
)

export default Routes;