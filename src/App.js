import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Intro from "./Intro";
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";
import ProjectsData from "./ProjectsData";
import About from "./About";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    function getProject(props) {
      let id = props.match.params.id;
      console.log(id);
      let currentProject = ProjectsData.find((p) => p.id === id);
      return <ProjectDetails {...props} project={currentProject} />;
    }
    return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Intro />} />
            <Route exact path="/portfolio" element={<Intro />} />
            <Route exact path="/projects" element={<ProjectList />} />
            <Route exact path="/projects/:id" element={<ProjectDetails />} />

            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<p>There's nothing here!</p>} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
