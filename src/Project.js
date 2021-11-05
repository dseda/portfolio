import React, { Component } from "react";
import authorPhoto from "./coding.jpeg";
import "./Project.css";
class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className="Project-image">
          <img src={authorPhoto} />
        </div>
        <h3>Project title</h3>
        <p>Project details</p>
        <footer>Techs used</footer>
      </div>
    );
  }
}
export default Project;
