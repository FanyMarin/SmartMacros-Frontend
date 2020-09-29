import React from "react";
import { Switch, Route } from "react-router-dom";
import Alimentos from "./Components/Alimentos"
import AuthForm from "./Components/AuthForm";
import LandingPage from "./Components/Landing";

const Routes = () => (
    <Switch>
        <Route exact path="/landing" component={LandingPage}/>
        <Route exact path="/alimentos" component={Alimentos}/> 
        <Route exact path="/login" component={AuthForm}/> 
        <Route exact path="/signup" component={AuthForm}/> 
    </Switch>
)

export default Routes;