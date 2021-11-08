import React, { Component } from "react";
import "./Project.css";
import jquery from "./jquery.png";
class Project extends Component {
  render() {
    console.log(jquery);
    const techsX = this.props.techs.map((t) => {
      if (t === "js") {
        return <i className="fab fa-js-square"></i>;
      } else if (t === "react") {
        return <i className="fab fa-react"></i>;
      } else if (t === "css") {
        return <i className="fab fa-css3-alt"></i>;
      } else if (t === "html") {
        return <i className="fab fa-html5"></i>;
      } else if (t === "jquery") {
        return <img className="tech" src={jquery}></img>;
      }
    });
    console.log(this.props.techs);
    return (
      <div key={this.props.id} className="Project">
        <div className="Project-image">
          <img src={this.props.imgSrc} />
        </div>
        <div className="Project-details">
          <h3>{this.props.title}</h3>
          <p>
            Project details
            {/* {this.props.details} */}
          </p>
          <footer>
            <p>Tech Stack: </p>
            <p>{techsX}</p>
          </footer>
        </div>
      </div>
    );
  }
}
export default Project;
