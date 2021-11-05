import React, { Component } from "react";
import Project from "./Project";
import "./ProjectList.css";
class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          imgSrc: "",
          title: "Contacts App",
          details: "",
          techsUsed: ["JS", "React.js", "CSS", "HTML"],
        },
        {
          id: 2,
          imgSrc: "",
          title: "Roll Dice",
          details: "",
          techsUsed: ["JS", "React.js", "CSS", "HTML"],
        },
        {
          id: 3,
          imgSrc: "",
          title: "Coin Flipper",
          details: "",
          techsUsed: ["JS", "React.js", "CSS", "HTML"],
        },
      ],
    };
  }
  render() {
    const projects = this.state.projects.map((p) => (
      <Project
        id={p.id}
        details={p.details}
        title={p.title}
        imgSrc={p.imgSrc}
        techs={p.techsUsed}
      />
    ));
    return (
      <div id="projects" className="Projects">
        <h2>My Projects</h2>
        <div className="ProjectList">{projects}</div>
      </div>
    );
  }
}
export default ProjectList;
