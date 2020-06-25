import React from "react";

const PortfolioCard = ({ name, id }) => {
  return (
    <section>
      <img src={require(`../Images/${id}.png`)} alt="Project thumbnail" />
      <h2>{name}</h2>
    </section>
  );
};

export default PortfolioCard;
