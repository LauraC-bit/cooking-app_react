import "./Main.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Cards/Card";

const Main = () => {
  const [dataTomato, setDataTomato] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputValue)
      .then((res) => setDataTomato(res.data.meals));
  }, [inputValue]);

  return (
    <div className="main">
      <input
        className="input"
        type="text"
        placeholder="Tapez un plat ou un ingrédient (anglais)"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="recipe_div">
        {dataTomato &&
          dataTomato
            .slice(0, 24)
            .map((recipe, index) => <Card key={index} dataTomato={recipe} />)}
      </div>
    </div>
  );
};

export default Main;
