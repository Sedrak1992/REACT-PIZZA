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
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const list = ["популярности", "по цене", "по алфавиту"];
  const sortName = list[selected];
  const onClickItem = (i) => {
    setSelected(i);
    setOpen(false);
  };

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
              <button
                className="popular__button"
                onClick={() => setOpen(!open)}
              >
                <a href="#">{sortName}</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {open && (
        <div className="sort__label">
          {list.map((name, i) => (
            <button
              key={i}
              onClick={() => onClickItem(i)}
              className={`sort__label__button ${
                selected === i ? "activeOpen" : ""
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
