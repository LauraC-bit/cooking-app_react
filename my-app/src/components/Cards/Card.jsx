import "./Card.scss";
import React from "react";

const Card = (props) => {
  const { dataTomato } = props;
  return (
    <div>
      <h1>{dataTomato.strMeal}</h1>
      <p>Origin : {dataTomato.strArea}</p>
      <img src={dataTomato.strMealThumb} alt={dataTomato.strMeal} />
    </div>
  );
};

export default Card;
