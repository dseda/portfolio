import React, { Component } from "react";
import Project from "./Project";
import "./ProjectList.css";
import contactsapp from "./address-book.png";
import todoapp from "./todoapp.png";
import coinflipper from "./coinflipper.png";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          imgSrc: contactsapp,
          title: "Contacts App",
          details: "",
          techsUsed: ["js", "css", "html", "jquery"],
          src: "https://dseda.github.io/address-book/",
        },
        {
          id: 2,
          imgSrc: todoapp,
          title: "Todo App",
          details: "",
          techsUsed: ["js", "react", "css", "html"],
          src: "https://dseda.github.io/react-todo-app/",
        },
        {
          id: 3,
          imgSrc: coinflipper,
          title: "Coin Flipper",
          details: "",
          techsUsed: ["js", "react", "css", "html"],
          src: "https://dseda.github.io/coin-flipper/",
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
        src={p.src}
      />
    ));
    return (
      <section className="Projects">
        <h2>My Projects</h2>
        <div className="ProjectList">{projects}</div>
      </section>
    );
  }
}
export default ProjectList;
