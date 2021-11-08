import React, { Component } from "react";
import "./Project.css";
import jquery from "./jquery.png";
class Project extends Component {
  render() {
    const techs = this.props.techs.map((t) => {
      if (t === "js") {
        return <i className="fab fa-js-square"></i>;
      } else if (t === "react") {
        return <i className="fab fa-react"></i>;
      } else if (t === "css") {
        return <i className="fab fa-css3-alt"></i>;
      } else if (t === "html") {
        return <i className="fab fa-html5"></i>;
      } else if (t === "jquery") {
        return (
          <div className="Tech-stack-img">
            <img className="tech" src={jquery} alt={t}></img>
          </div>
        );
      }
    });
    console.log(this.props.techs);
    const { id, imgSrc, title, details, src } = this.props;
    return (
      <section key={id} className="Project">
        <div className="Project-image">
          <img src={imgSrc} />
        </div>
        <div className="Project-details">
          <h3>{title}</h3>
          <div className="Tech-stack">
            <p>Tech Stack: </p>
            <p>{techs}</p>
          </div>
          <p>
            Project details
            {/* {details} */}
          </p>

          <footer>
            <a href={src} className="Project-demo-link" target="_blank">
              <p>View live demo</p>
            </a>
          </footer>
        </div>
      </section>
    );
  }
}
export default Project;
