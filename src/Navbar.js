import React, { Component } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
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
            <li>
              <Link
                to="/"
                style={{ padding: 5, color: "white", textDecoration: "none" }}
              >
                Home
              </Link>
            </li>

            <li>
              {" "}
              <Link
                to="/projects"
                style={{ padding: 5, color: "white", textDecoration: "none" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ padding: 5, color: "white", textDecoration: "none" }}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default Navbar;
