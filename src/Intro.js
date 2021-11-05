import React, { Component } from "react";
import "./Intro.css";
import authorPhoto from "./coding.jpeg";
class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div className="Intro-info">
          <p>Hi! My name is Seda.</p>
          <p>I am a software developer.</p>
          <p>I used React to build this portfolio</p>
        </div>
        <div className="Intro-photo">
          <img src={authorPhoto} alt="author-coding" />
        </div>
      </div>
    );
  }
}
export default Intro;
