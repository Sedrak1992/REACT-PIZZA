import { useState } from "react";
import "./cardComponent.css";
import React from "react";

const CardComponent = ({ list }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeTyp2, setActiveType2] = useState(0);
  const arr = ["тонкое", "традиционное"];

  return (
    <div>
      <h2>Все пиццы</h2>
      <div className="CardComponent">
        {list.map((item, id) => (
          <div key={id}>
            <img src={item.imageUrl} />
            <h4>{item.title}</h4>
            <div className="div__button">
              {item.types.map((it, i) => (
                <button key={i} className={activeType === i ? "active" : ""}>
                  {arr[it]}
                </button>
              ))}

              <div className="size-pizza">
                {item.sizes.map((items, index) => (
                  <button key={index} className=" size-pizza__button">
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
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
