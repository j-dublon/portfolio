import React from "react";

const PortfolioCard = ({ name, id, description, tech, site, code }) => {
  return (
    <section className="portfolioCard__container">
      <img
        src={require(`../Images/${id}.png`)}
        alt="Project thumbnail"
        className="portfolioCard__img"
      />
      <section className="portfolioCard__infoContainer">
        <div>
          <a
            href={site}
            className="portfolioCard__title"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
          <p className="portfolioCard__description">{description}</p>
          <div className="portfolioCard__tech">
            <p className="portfolioCard__tech__heading">Tech:</p>
            <p className="portfolioCard__tech__content">{tech}</p>
          </div>
        </div>
        <section className="portfolioCard__links">
          {site !== "" && (
            <a
              href={site}
              className="portfolioCard__links__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site
            </a>
          )}
          <a
            href={code}
            className="portfolioCard__links__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            View code
          </a>
        </section>
      </section>
    </section>
  );
};

export default PortfolioCard;
