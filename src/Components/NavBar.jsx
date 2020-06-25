import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <section className="navigation">
      <nav className="leftNav">
        <a
          href="https://github.com/j-dublon"
          target="_blank"
          rel="noopener noreferrer"
          className="leftNav__item"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jdublon/"
          target="_blank"
          rel="noopener noreferrer"
          className="leftNav__item"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </nav>
      <nav className="rightNav">
        <Link to={"/"} className="rightNav__item">
          Welcome
        </Link>
        <Link to={"/portfolio"} className="rightNav__item">
          Portfolio
        </Link>
        <Link to={"/info"} className="rightNav__item">
          About
        </Link>
        <Link to={"/contact"} className="rightNav__item">
          Contact
        </Link>
      </nav>
    </section>
  );
}
