import { useState } from "react";
import Vector_a from '../../Img/Vector_a.svg'
import "./navigationMini.css";
import React from "react";

const NavigationMini = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const hamer = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const ocClickCategory = (index) => {
    setActiveIndex(index);
  };
  console.log(activeIndex);
  return (
    <div className="filters--button">
      {hamer.map((value, i) => (
        <button
          key={i}
          onClick={() => ocClickCategory(i)}
          className={`filters--button   ${activeIndex === i ? "active" : ""}`}
        >
          {value}
        </button>
      ))}
      <div className="NavigationMini--box__2">
        <ul>
          <li className="imgVector_a">
            <img src={Vector_a} />
            <a href="#">Сортировка по:</a>
          </li>
          <li className="popular">
            <a href="#">популярности</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMini;
