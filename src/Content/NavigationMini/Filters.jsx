import { useState } from "react";
import "./filters.css";
import React from "react";

const Filters = ({ list }) => {
  const [filter, setFilters] = useState(
    [...list].map((listItem, listItemIndex) => ({
      id: listItemIndex,
      name: listItem,
      checked: false,
    }))
  );

  const onSelect = (btnIndex) => {
    const newFilter = [...filter];
    newFilter.forEach((filter) => {
      filter.checked = false;
    });
    newFilter[btnIndex].checked = true;
    setFilters(newFilter);
  };
  return (
    <div className="filters">
      {filter.map((filterBtn, filterBtnIndex) => (
        <button
          className={`filters--button ${filterBtn.checked ? "active" : ""}`}
          key={filterBtn.id}
          onClick={() => onSelect(filterBtnIndex)}
        >
          {filterBtn.name}
        </button>
      ))}
    </div>
  );
};

export default Filters;
