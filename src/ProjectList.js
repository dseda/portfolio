import React, { Component } from "react";
import ProjectsData from "./ProjectsData";
import "./ProjectList.css";
import "./Project.css";
import jquery from "./images/jquery.png";
import { Link, Outlet } from "react-router-dom";

class ProjectList extends Component {
  static defaultProps = {
    projects: ProjectsData,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const projects = this.props.projects.map((p) => (
      <section key={p.id} className="Project">
        <div className="Project-image">
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            style={{ textDecoration: "none" }}
          >
            <img src={p.imgSrc} />
          </Link>
        </div>
        <div className="Project-info">
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <h3>{p.title}</h3>
          </Link>

          <div className="Tech-stack">
            <p>Tech Stack: </p>
            <ul>
              {p.techsUsed.map((t) => {
                if (t === "js")
                  return (
                    <li>
                      <i className="fab fa-js-square"></i>
                    </li>
                  );
                else if (t === "react")
                  return (
                    <li>
                      <i className="fab fa-react"></i>
                    </li>
                  );
                else if (t === "css")
                  return (
                    <li>
                      <i className="fab fa-css3-alt"></i>
                    </li>
                  );
                else if (t === "html")
                  return (
                    <li>
                      <i className="fab fa-html5"></i>
                    </li>
                  );
                else if (t === "jquery") {
                  return (
                    <li className="Tech-stack-img">
                      <img className="tech" src={jquery} alt={t}></img>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          {/* <p>{p.details}</p> */}
          <footer>
            <a href={p.src} className="Project-demo-link" target="_blank">
              <p>Live demo</p>
            </a>
            <div className="Project-details">
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                style={{ textDecoration: "none" }}
              >
                <p>View project details</p>
              </Link>
            </div>
            <Outlet />
          </footer>
        </div>
      </section>
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
