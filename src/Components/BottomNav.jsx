import React from "react";

export default function BottomNav() {
  return (
    <nav className="bottomNav">
      <a href="https://github.com/j-dublon" className="bottomNav__link">
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/jdublon/"
        className="bottomNav__link"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </nav>
  );
}
