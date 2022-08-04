import React from "react";
import Header from "../Content/Header/Header";
import Navigation from "../components/navigation/Navigation";
import list from "../stateArray/StateArray";
import Pizzas from "../components/Pizzas.jsx"

const PizzaPage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Pizzas list={list} />
    </div>
  );
};

export default PizzaPage;
