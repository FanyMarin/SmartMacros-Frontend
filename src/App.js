import React, { Component } from "react";
import Navbar from "./Components/Common/Navbar";
import "./App.css";
import Routes from "./Routes";
import Footer from "./Components/Common/Footer";
import AppContext from "./AppContext";
import {withRouter} from 'react-router'
import {logout} from "./Services/authService"

class App extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")) || {},
  };

  setUser = () => {
    let { user } = this.state;
    this.setState({ user });
  };

  logout = () => {
    const { history } = this.props;
    logout().then(() => {
      localStorage.removeItem("user");
      this.setState({user: {}})
      history.push("/login")
    })
  }

  render() {
    const { state, setUser, logout } = this;
    return (
      <AppContext.Provider value={{ state, setUser, logout }}>
        <div className="App">
          <Navbar user={state.user} logout={logout}/>
          <Routes />
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}
const AppWithRouter = withRouter(App)


export default AppWithRouter;
  