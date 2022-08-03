import React from "react";
import Pizza from "./Pizza.jsx";

import "./pizzas.css";

const CardComponent = ({ list }) => {
  return (
    <div>
      <h2>Все пиццы</h2>
      <div className="CardComponent">
        {list.map((item, index) => (
          <Pizza key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
