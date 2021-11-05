import React, { Component } from "react";
import authorPhoto from "./coding.jpeg";
import "./Project.css";
class Project extends Component {
  render() {
    const techs = this.props.techs.join(", ");
    return (
      <div key={this.props.id} className="Project">
        <div className="Project-image">
          <img src={authorPhoto} /*src={imgSrc}*/ />
        </div>
        <h3>{this.props.title}</h3>
        <p>
          Project details
          {/* {this.props.details} */}
        </p>
        <footer>{techs}</footer>
      </div>
    );
  }
}
export default Project;
