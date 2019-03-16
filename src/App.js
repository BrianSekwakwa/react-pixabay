import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import Search from "./components/search/Search.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
      </div>
    );
  }
}

export default App;
