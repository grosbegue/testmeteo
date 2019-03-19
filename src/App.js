import React, { Component } from "react";

import "./App.css";

import meteo from "../src/meteo.json";
import Carte from "./carte";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteo: meteo
    };
  }
  render() {
    return (
      <div className="App">
        <Carte />
      </div>
    );
  }
}

export default App;
