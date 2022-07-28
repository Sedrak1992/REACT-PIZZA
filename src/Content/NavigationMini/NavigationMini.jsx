import "./navigationMini.css";
import Vector_a from "../../Img/Vector_a.svg";
import React from "react";

const NavigationMini = () => {
  return (
    <div className="NavigationMini">
      <div className="NavigationMini--box">
        <ul>
          <li className="elections">
            <a href="#">Все</a>
          </li>
          <li>
            <a href="#">Мясные</a>
          </li>
          <li>
            <a href="#">Вегетарианская</a>
          </li>
          <li>
            <a href="#">Гриль</a>
          </li>
          <li>
            <a href="#">Острые</a>
          </li>
          <li>
            <a href="#">Закрытые</a>
          </li>
        </ul>
      </div>
      <div className="NavigationMini--box__2">
        <ul>
          <li className="imgVector_a">

            <img src={Vector_a}  />
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
