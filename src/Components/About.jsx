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
                Javascript, React, React Native, Typescript
              </li>
              <li className="about__topContent__list__item">
                GraphQL, REST, Node, Apollo, AWS, Azure
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
                GIT version control, agile delivery, CI/CD
              </li>
              <li className="about__topContent__list__item">
                Coaching & developing others
              </li>
              <li className="about__topContent__list__item">
                Promoting inclusivity & diversity in the workplace
              </li>
            </ul>
          </div>
          <div className="about__topContent__img_container">
            <img
              src={require("../Images/Profile.png")}
              alt="Profile"
              className="about__topContent__img"
            />
          </div>
        </section>
        <p className="about__bottomContent">
          I currently work as a Fullstack Developer for the National STEM
          Learning Centre in York. Prior to this, I worked as a Product
          Developer with AND Digital, a consultancy that builds technical
          capabilities while delivering industry-leading digital strategies and
          products. I have worked on a variety of different projects, leading on
          project-critical features, mentoring more junior developers, and
          delivering training to clients on React, React Native and TDD.
          <br />
          <br />I work primarily in Javascript, using React, React Native, and
          Next.js, and I have extensive experience with Node, GraphQL, and REST
          APIs. I write clear, readable code using modular programming to
          produce robust, maintainable projects. I contribute to every stage of
          the development life cycle, from problem-analysis to deployment,
          working closely with design, test and business development to ensure
          every product exceeds expectations.
          <br />
          <br />I thrive in challenging environments and I am always keen to
          learn new tech stacks. I am currently teaching myself Python.
        </p>
      </div>
    </main>
  );
}
