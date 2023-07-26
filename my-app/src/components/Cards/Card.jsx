import "./Card.scss";
import React from "react";
import Ingredient from "../Ingredient/Ingredient";

//idee hover fond noir opacity black, strInstructions texte blanc

const Card = (props) => {
  const { dataTomato } = props;
  const arrayIngredient = Object.entries(dataTomato)
    .filter(([key, val]) => key.includes("strIngredient"))
    .map((ingredient) => ingredient[1]);

  return (
    <div className="recipe">
      <h1>{dataTomato.strMeal}</h1>
      <p>Origin : {dataTomato.strArea}</p>
      <div className="instructions">
        <img src={dataTomato.strMealThumb} alt={dataTomato.strMeal} />
        <Ingredient arrayIngredient={arrayIngredient} />
      </div>
    </div>
  );
};

export default Card;
