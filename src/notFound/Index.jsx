import React from "react";
import Classis from "./notFoundBlock.module.css";

const Index = () => {
  return (
    <div className={Classis.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено :(`
      </h1>
    </div>
  );
};

export default Index;
