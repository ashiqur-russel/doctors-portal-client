import React from "react";

const Card = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div className={`card p-4 text-white md:card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Card;
