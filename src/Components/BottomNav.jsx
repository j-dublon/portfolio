import React from "react";
import { Link } from "@reach/router";

const BottomNav = () => {
  return (
    <nav>
      <Link to="https://github.com/j-dublon">
        <i className="fab fa-github"></i>
      </Link>
      <Link to="https://www.linkedin.com/in/jdublon/">
        <i className="fab fa-linkedin"></i>
      </Link>
    </nav>
  );
};

export default BottomNav;
