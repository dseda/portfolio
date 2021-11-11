import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Intro from "./Intro";
import ProjectList from "./ProjectList";
import About from "./About";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/portfolio" element={<Intro />} />
          <Route exact path="/projects" element={<ProjectList />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
