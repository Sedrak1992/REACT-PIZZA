import image_1 from "../../Img/image_1.png";
import rub from "../../Img/520 ₽.svg";
import basket from "../../Img/iconfinder_shopping-cart_2561279 1.svg";
import Rectangle from "../../Img/Rectangle_gic.svg";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="header__container">
          <Link to="/">
            <div className="header__container--box">
              <img src={image_1} alt="pizza" className="logo--img" />
              <div>
                <h1>REACT PIZZA</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <div>
            <Link to="/cart">
              <p className="paragraph">
                <button>
                  <img src={rub} />
                </button>
                <button>
                  <img src={Rectangle} />
                </button>
                <button>
                  <img style={{ width: "16px" }} src={basket} /> 3
                </button>
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
