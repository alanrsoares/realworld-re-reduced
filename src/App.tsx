import React, { Component } from "react";
import NavBar from "./ui/compounds/NavBar";
import Footer from "./ui/compounds/Footer";
import Home from "./ui/pages/Home";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
