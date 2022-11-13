import React from "react";

const Card = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div className={`card px-4 text-white card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">hh</button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Card;
