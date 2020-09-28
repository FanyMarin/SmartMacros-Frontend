import React from "react";
import { Switch, Route } from "react-router-dom";
import Alimentos from "./Components/Alimentos"
import AuthForm from "./Components/AuthForm";

const Routes = () => (
    <Switch>
        <Route exact path="/alimento" component={Alimentos}/> 
        <Route exact path="/login" component={AuthForm}/> 
        <Route exact path="/signup" component={AuthForm}/> 
    </Switch>
)

export default Routes;