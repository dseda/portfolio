import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    // this.toggleMenu();
  }
  render() {
    return (
      <nav>
        {/* {!this.props.menuOpen ? (
          <button className="Hamburger" onClick={this.handleClick}>
            <i className="fas fa-bars"></i>
          </button>
        ) : (
          <button className="Hamburger" onClick={this.handleClick}>
            <i class="fas fa-times"></i>
          </button>
        )} */}
        <div>
          <ul className="Navigation">
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
        </div>
      </nav>
    );
  }
}

export default Navbar;
