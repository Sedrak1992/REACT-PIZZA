import "./cardComponent.css";
import React from "react";

const CardComponent = ({ list }) => {
  return (
    <div>
      <h2>Все пиццы</h2>
      <div className="CardComponent">
        {list.map((item, id) => (
          <div key={item.id}>
            <img src={item.img} />
            <h4>{item.title}</h4>
            <div className="div__button">
              <button>тонкое</button>
              <button>традиционное</button>
              <button>26 см.</button>
              <button>30 см.</button>
              <button>40 см.</button>
            </div>
            <div className="price__button">
              <div>от {item.price} ₽</div>
              <div>
                <button className="add__button">+ Добавить </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
