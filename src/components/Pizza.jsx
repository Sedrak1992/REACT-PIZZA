import React from "react";
import { useState } from "react";

const Pizza = ({ item }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeTyp2, setActiveType2] = useState(0);
  const arr = ["тонкое", "традиционное"];

  return (
    <div>
      <img src={item.imageUrl} />
      <h4>{item.title}</h4>
      <div className="div__button">
        {item.types.map((it, i) => (
          <button
            key={i}
            onClick={() => setActiveType(i)}
            className={activeType === it ? "active" : ""}
          >
            {arr[it]}
          </button>
        ))}

        <div className="size-pizza">
          {item.sizes.map((items, index) => (
            <button
              key={index}
              onClick={() => setActiveType2(index)}
              className={`size-pizza__button ${
                activeTyp2 === index ? "active" : ""
              }`}
            >
              {items} см.
            </button>
          ))}
        </div>
      </div>
      <div className="price__button">
        <div>от {item.price} ₽ </div>
        <div>
          <button className="add__button">

            + Добавить <span>0</span>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
