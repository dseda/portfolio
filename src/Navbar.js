import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="Navigation">
          {/* <i class="fas fa-bars"></i>
            <i class="fas fa-bars"></i>
            <i class="fas fa-bars"></i> */}
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
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

export default Navbar;
