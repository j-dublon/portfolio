import React from "react";

export default function About() {
  return (
    <main>
      <h2 className="about__title">About me</h2>
      <div className="about__container">
        <section className="about__topContent">
          <div className="about__topContent__container">
            <h3 className="about__topContent__title">Core skills:</h3>
            <ul className="about__topContent__list">
              <li className="about__topContent__list__item">
                JavaScript, CSS & HTML5
              </li>
              <li className="about__topContent__list__item">
                React.js, React Native, Node.js
              </li>
              <li className="about__topContent__list__item">
                Responsive front-end design
              </li>
              <li className="about__topContent__list__item">
                RESTful APIs, PostgreSQL databases
              </li>
              <li className="about__topContent__list__item">
                TDD and unit testing
              </li>
              <li className="about__topContent__list__item">
                {" "}
                Git version control, remote Agile practices
              </li>
            </ul>
          </div>
          <img
            src={require("../Images/Profile.png")}
            alt="Profile"
            className="about__topContent__img"
          />
        </section>
        <p className="about__bottomContent">
          Prior to completing the Northcoders Developer Pathway in 2020, I
          worked in international development; I have two MSc. degrees from
          Technische Universität Dresden, Germany, and Copenhagen University,
          Denmark. Between 2014 and 2016, I provided communications,
          administration and monitoring and evaluation support to a global flood
          resilience programme at the international NGO Practical Action. After
          spending some time volunteering abroad, I started and ran a successful
          business growing and supplying organic vegetables to retailers in
          Hebden Bridge and Todmorden.
        </p>
      </div>
    </main>
  );
}
