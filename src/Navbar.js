import React, { Component } from "react";
import { Link, useMatch, useResolvedPath, LinkProps } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    // <nav className="Nav-ham">
    //   <button className="Hamburger" onClick={this.props.toggleMenu}>
    //     <i className="fas fa-bars"></i>
    //   </button>
    //   </nav>
    //   <nav className="Nav-cross">
    //   <button className="Hamburger" onClick={this.props.toggleMenu}>
    //     <i class="fas fa-times"></i>
    //   </button>
    //   </nav>

    return (
      <nav>
        <ul className="Site-nav">
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>

          <li>
            <CustomLink to="/projects">Projects</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
        </ul>
      </nav>
    );
  }
}
function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          textDecoration: match ? "underline" : "none",
          color: match ? "white" : "inherit",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
}
export default Navbar;
