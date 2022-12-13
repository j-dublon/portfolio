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
                React, Node, Apollo, Typescript, AWS, Azure
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
          I currently work as a Product Developer for a digital consultancy that builds 
          technical capabilities while delivering industry-leading digital 
          strategies and products. I am currently working with a national media company to 
          deliver a React Native app used by 8 million+ people. In this role I have led on 
          project-critical features, delivered training in React Native and TDD, and 
          worked closely with our client's devs to build their skills and confidence. As well
          as my client work, I also mentor more junior developers, and support our in-house 
          communities of practice.<br />
          <br />Prior to this, I worked as a Mobile App Developer for an industry-leading
          agency in York. I worked primarily in React Native and GraphQL, using
          modular programming to produce robust, maintainable code. I was
          involved in every stage of the development life cycle, from
          problem-analysis to deployment, working closely with designers
          and testers to ensure every product exceeded clients’ expectations.<br />
          <br />I thrive in challenging environments and I am always keen to learn new tech 
          stacks. I am currently teaching myself Python.
        </p>
      </div>
    </main>
  );
}
