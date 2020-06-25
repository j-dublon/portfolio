import React, { Component } from "react";
import PortfolioCard from "./PortfolioCard";

class Portfolio extends Component {
  state = {
    projects: [
      {
        name: "Renewable Exchange Coding Test",
        id: "1",
        description:
          "A single page app built during a coding test, serving data from a web API. Users may add, delete and filter other users.",
        tech: "React | Redux | Responsive CSS | HTML5 | JavaScript | Axios",
        site: "https://renewable-exchange.netlify.app/",
        code: "https://github.com/j-dublon/renewable-test",
      },
      {
        name: "Independent Leeds",
        id: "2",
        description:
          "A full stack web app that helps independent eateries reach their customers with their current services during Covid-19. Users may register, login, find businesses on a map, filter by cuisine and dietary requirements, view individual business pages and leave comments.",
        tech:
          "React | Material-UI | HTML5 | Responsive CSS Leaflet | Node.js | Axios | Reach Router | AWS Amplify | Cognito | DynamoDB | API Gateway |  Lambda  | Cloud Watch | IAM | Javascript",
        site: "https://independent-leeds.netlify.app/",
        code: "https://github.com/j-dublon/independent-leeds",
      },
      {
        name: "Northcoders News",
        id: "3",
        description:
          "A full stack news app serving data from a self-built RESTful API. Users may browse articles, filter by topic, leave comments and vote on articles and comments.",
        tech:
          "React | HTML5 | Responsive CSS Leaflet | Node.js | Axios | Reach Router",
        site: "https://j-dublon-react-news-app.netlify.app/",
        code: "https://github.com/j-dublon/react-news-app",
      },
      {
        name: "RESTful API",
        id: "4",
        description:
          "A RESTful API utilising MVC architecture, with comprehensive error handling. The API serves articles, comments, topics and users, and enables the posting and deleting of comments, and the amending of 'vote' property of both comments and articles.",
        tech: "Express | Knex | PostgreSQL | Mocha | Chai | Supertest",
        site: "https://j-dublon-nc-news.herokuapp.com/api",
        code: "https://github.com/j-dublon/be-nc-news",
      },
      {
        name: "Alien Matter Hunt",
        id: "5",
        description:
          "A single page app that serves data on 'alien landing sites' form NASA's meteorite API. Users can search for sites by region and select map markers to show information.",
        tech: "React | Axios | Leaflet | HTML5 | Responsive CSS",
        site: "",
        code: "https://github.com/j-dublon/alien-matter-hunt",
      },
    ],
  };

  render() {
    const { projects } = this.state;
    return (
      <main>
        <h2 className="portfolio__title">Portfolio</h2>
        {projects.map((project) => {
          const { id } = project;
          return <PortfolioCard key={id} {...project} />;
        })}
      </main>
    );
  }
}

export default Portfolio;

//   <img src={require("../Images/NNsmall.jpg")} alt="Northcoders News" />
//   <a href={"https://j-dublon-react-news-app.netlify.app/"}>
//     Northcoders News
//   </a>

// <h3>
//   <img src={require("../Images/APIsmall.jpg")} alt="RESTful API" />
//   <a href={"https://j-dublon-nc-news.herokuapp.com/api"}>RESTful API</a>
// </h3>
// <h3>
//   <img
//     src={require("../Images/AMHsmall.jpg")}
//     alt="Alien Matter Hunt"
//   />
//   <a href={"https://github.com/j-dublon/alien-matter-hunt"}>
//     Alien Matter Hunt
//   </a>
// </h3>
