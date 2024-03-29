import React from "react";
import { Link } from "@reach/router";

export default function Welcome() {
  return (
    <main className="welcome">
      <h1 className="welcome__title">Hello, my name is Jodi Dublon.</h1>
      <h1 className="welcome__title">I am a Software Engineer.</h1>
      <Link to={"/portfolio"} className="welcome__link">
        View my work <i className="fas fa-arrow-circle-right"></i>
      </Link>
    </main>
  );
}
