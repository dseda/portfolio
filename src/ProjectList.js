import React, { Component } from "react";
import Project from "./Project";
import "./ProjectList.css";
class ProjectList extends Component {
  render() {
    return (
      <div id="projects" className="Projects">
        <h2>My Projects</h2>
        <div className="ProjectList">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    );
  }
}
export default ProjectList;
