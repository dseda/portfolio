import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import "./Interests.css";
class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: true };
    this.flip = this.flip.bind(this);
  }
  flip(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    const runningIcon = <i className="fas fa-running"></i>;
    const cookingIcon = <i className="fas fa-pizza-slice"></i>;
    const travellingIcon = <i className="fas fa-suitcase-rolling"></i>;
    const liveShows = <i class="fas fa-theater-masks"></i>;
    const interests = [
      { name: "Running", icon: runningIcon },
      { name: "Cooking", icon: cookingIcon },
      { name: "Travelling", icon: travellingIcon },
      { name: "Live Shows", icon: liveShows },
    ].map((i, index) => (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <li className="text" key={index}>
          <span>{i.name}</span>
        </li>
        <li className="icon" key={index}>
          {i.icon}
        </li>
      </ReactCardFlip>
    ));

    return (
      <section className="Interests">
        <h4>My Interests</h4>
        <div className="InterestsContainer">
          <ul onMouseEnter={this.flip} onMouseLeave={this.flip}>
            {interests}
          </ul>
        </div>
      </section>
    );
  }
}

export default Interests;
