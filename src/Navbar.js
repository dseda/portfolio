import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    if (!this.props.menuOpen) {
      return (
        <nav className="Nav-ham">
          <button className="Hamburger" onClick={this.props.toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      );
    } else {
      return (
        <nav className="Nav-cross">
          <button className="Hamburger" onClick={this.props.toggleMenu}>
            <i class="fas fa-times"></i>
          </button>

          <ul className="Site-nav">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>

            <a href="#">
              <li>About</li>
            </a>
          </ul>
        </nav>
      );
    }
  }
}

export default Navbar;
