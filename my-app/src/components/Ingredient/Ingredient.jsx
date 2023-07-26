import React from "react";
import "../Ingredient/Ingredient.scss";

const Ingredient = (props) => {
  const { arrayIngredient } = props;
  return (
    <div className="ingredientDiv">
      <h3 className="ingredientTitle">Ingrédients: </h3>
      <ul className="listeIngredients_div">
        {arrayIngredient.map((ingredient, index) => (
          <li className="listeIngredients" key={index}>
            {ingredient ? ingredient : false}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredient;
