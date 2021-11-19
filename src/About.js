import React, { Component } from "react";
import TimeLine from "./Timeline";
import Interests from "./Interests";
import Skills from "./Skills";
import "./About.css";
class About extends Component {
  render() {
    return (
      <section className="About">
        <h4>About Me</h4>
        <Interests />
        <div className="Timeline">
          <TimeLine />
        </div>
        <Skills />
      </section>
    );
  }
}

export default About;
