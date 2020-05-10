import React from "react";
import { Link } from "@reach/router";

const Welcome = () => {
  return (
    <header>
      <h1>Hello, my name is Jodi Dublon.</h1>
      <h1>I am a JavaScript developer.</h1>
      <Link to={"/portfolio"}>
        View my work <i class="fas fa-arrow-circle-right"></i>
      </Link>
    </header>
  );
};

export default Welcome;
