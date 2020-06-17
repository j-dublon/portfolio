import React from "react";

export default function Portfolio() {
  return (
    <main>
      <section>
        <h3>
          <img src={require("../Images/NNsmall.jpg")} alt="Northcoders News" />
          <a href={"https://j-dublon-react-news-app.netlify.app/"}>
            Northcoders News
          </a>
        </h3>
        <h3>
          <img src={require("../Images/APIsmall.jpg")} alt="RESTful API" />
          <a href={"https://j-dublon-nc-news.herokuapp.com/api"}>RESTful API</a>
        </h3>
        <h3>
          <img
            src={require("../Images/AMHsmall.jpg")}
            alt="Alien Matter Hunt"
          />
          <a href={"https://github.com/j-dublon/alien-matter-hunt"}>
            Alien Matter Hunt
          </a>
        </h3>
      </section>
    </main>
  );
}
