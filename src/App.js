import React from 'react';
import Navbar from "./Components/Navbar"
import './App.css';
import Routes from "./Routes";
import Footer from "./Components/Footer/index"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
