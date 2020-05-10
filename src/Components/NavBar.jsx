import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}>Welcome</Link>
      <Link to={"/portfolio"}>Portfolio</Link>
      <Link to={"/info"}>About me</Link>
      <Link to={"/contact"}>Contact</Link>
    </nav>
  );
};

export default NavBar;
