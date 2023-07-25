import "./Main.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Cards/Card";

const Main = () => {
  const [dataTomato, setDataTomato] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
      .then((res) => setDataTomato(res.data.meals));
  }, []);

  return (
    <div>
      <input type="text" placeholder="Tapez un ingrédient (anglais)" />
      <div className="recipe">
        {dataTomato.map((recipe, index) => (
          <Card key={index} dataTomato={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Main;
