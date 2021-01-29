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
                Javascript, React Native, GraphQL
              </li>
              <li className="about__topContent__list__item">
                React, Node, Apollo, Typescript, AWS Amplify & Cognito
              </li>
              <li className="about__topContent__list__item">
                Clear DRY code, modular programming
              </li>
              <li className="about__topContent__list__item">
                Debugging and problem-solving
              </li>
              <li className="about__topContent__list__item">
                Test driven delivery
              </li>
              <li className="about__topContent__list__item">
                {" "}
                GIT version control, agile delivery, JIRA
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
          I currently work as a mobile app developer for an industry-leading
          agency in York. I work primarily in React Native and GraphQL, using
          modular programming to produce robust, maintainable code. I am
          involved in every stage of the development life cycle, from
          problem-analysis to deployment, and work closely with our designers
          and testers to ensure every product exceeds our clients’ expectations.
          We use agile delivery for continuous deployment, and I am experienced
          in using GIT to manage multiple branches across different releases. I
          strive to continuously improve my coding skills, and enjoy having the
          opportunity to work closely with and learn from my team. <br />
          <br /> Prior to this, I completed an intensive traineeship with
          Northcoders, where I used test-driven development to deliver across
          the full stack, including servers, REST APIs, and PostgreSQL
          databases.
        </p>
      </div>
    </main>
  );
}
