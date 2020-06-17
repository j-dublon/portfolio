import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Router } from "@reach/router";
import Welcome from "./Components/Welcome";
import BottomNav from "./Components/BottomNav";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Welcome path="/" />
        <Portfolio path="/portfolio" />
        <About path="/info" />
        <Contact path="/contact" />
      </Router>
      <BottomNav />
    </div>
  );
}

export default App;
