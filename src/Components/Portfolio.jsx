import React, { Component } from "react";
import PortfolioCard from "./PortfolioCard";

class Portfolio extends Component {
  state = {
    projects: [
      {
        name: "A Multitude of Drops",
        id: "7",
        description:
          "A React Native app that serves data from a self-built API. Users select a topic and are shown a quote from the collection.",
        tech: "React Native | Axios | Express | PostgreSQL",
        site: "",
        code: "https://github.com/j-dublon/fe-amod",
      },
      {
        name: "Northcoders News",
        id: "3",
        description:
          "A full stack news app serving data from a self-built RESTful API. Users may browse articles, filter by topic, leave comments and vote on articles and comments.",
        tech:
          "React | HTML5 | Responsive CSS | Leaflet | Node.js | Axios | Reach Router",
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
        name: "GraphQL Book List Server",
        id: "9",
        description:
          "A GraphQL server built to serve book and author data from a MongoDB database via MongoDB Atlas.",
        tech: "Express | GraphQL | Mongoose | MongoDB Atlas",
        code: "https://github.com/j-dublon/graphql-playlist",
      },
      {
        name: "GraphQL Book List",
        id: "10",
        description:
          "A React app that uses Apollo to query a self-built GraphQL server.",
        tech: "React | React Hooks | Apollo",
        code: "https://github.com/j-dublon/graphql-playlist",
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
        name: "Distance Events",
        id: "8",
        description:
          "A React Native app that serves events data from a web API.",
        tech: "React Native | Axios",
        site: "",
        code: "https://github.com/j-dublon/distance-events",
      },
      {
        name: "The Energy Market",
        id: "1",
        description:
          "A single page app serving data from a web API. Users may add, delete and filter other users.",
        tech: "React | Redux | Responsive CSS | HTML5 | JavaScript | Axios",
        site: "https://energy-market.netlify.app/",
        code: "https://github.com/j-dublon/renewable-test",
      },
      {
        name: "Game Review App",
        id: "6",
        description:
          "A simple mobile app built using React Native. Users can view reviews and add their own. This was an opportunity for me to practice using React Hooks and React Native.",
        tech: "React Native | Formik | Yup | React Navigation",
        site: "",
        code: "https://github.com/j-dublon/react-native-practice-app",
      },
      {
        name: "Alien Matter Hunt",
        id: "5",
        description:
          "A single page app serving data on 'alien landing sites' form NASA's meteorite API. Users can search for sites by region and select map markers to show information.",
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
