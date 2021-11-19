import React, { Component } from "react";

import "./Skills.css";
class Skills extends Component {
  static defaultProps = { skills: ["javascript", "react", "html5", "css3"] };
  render() {
    return (
      <section className="Skills">
        <h4>My Skills</h4>
        <ul className="SkillsContainer">
          {this.props.skills.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Skills;
