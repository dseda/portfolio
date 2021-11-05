import React, { Component } from "react";
import Project from "./Project";
import "./ProjectList.css";
import addressbook from "./address-book.png";
import todoapp from "./todoapp.png";
import coinnflipper from "./coinflipper.png";
class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          imgSrc: addressbook,
          title: "Contacts App",
          details: "",
          techsUsed: ["js", "react", "css", "html"],
        },
        {
          id: 2,
          imgSrc: todoapp,
          title: "Todo App",
          details: "",
          techsUsed: ["js", "react", "css", "html"],
        },
        {
          id: 3,
          imgSrc: coinnflipper,
          title: "Coin Flipper",
          details: "",
          techsUsed: ["js", "react", "css", "html"],
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
