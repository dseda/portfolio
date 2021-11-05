import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotating: false,
    };
    this.toggleRotate = this.toggleRotate.bind(this);
  }
  toggleRotate(e) {
    this.setState((st) => {
      return { rotating: !st.rotating };
    });
    console.log("start");
  }

  rotateEnd() {}
  render() {
    const rotating = this.state.rotating;
    return (
      <header onMouseEnter={this.toggleRotate} onMouseLeave={this.toggleRotate}>
        <div className="Logo">
          <div>
            <i className={`fab fa-stripe-s ${rotating ? "rotating" : ""}`}></i>
          </div>
          <span>eda.</span>
        </div>
        <Navbar />
      </header>
    );
  }
}

export default Header;
