import { useState } from "react";
import Vector_a from "../../Img/Vector_a.svg";
import "./navigation.css";
import React from "react";

const hamer = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div className="filters--button">
        <div className="filters--button--navigation">
          {hamer.map((value, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`filters--button   ${
                activeIndex === i ? "active" : ""
              }`}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="NavigationMini--box">
          <ul className="NavigationMini--box__ul">
            <li className="imgVector_a">
              <button className="imgVector_a--button">
                <img src={Vector_a} />
                <a href="#">Сортировка по:</a>
              </button>
            </li>
            <li className="popular">
              <button className="popular__button">
                <a href="#">популярности</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="sort__label">
        <button className="sort__label__button">популярности</button>
        <button className="sort__label__button">по цене</button>
        <button className="sort__label__button">по алфавиту</button>
      </div>
    </div>
  );
};

export default Navigation;
