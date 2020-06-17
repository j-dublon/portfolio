import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav className="topnav">
      <Link to={"/"} className="topnav__item">
        Welcome
      </Link>
      <Link to={"/portfolio"} className="topnav__item">
        Portfolio
      </Link>
      <Link to={"/info"} className="topnav__item">
        About me
      </Link>
      <Link to={"/contact"} className="topnav__item">
        Contact
      </Link>
    </nav>
  );
}
