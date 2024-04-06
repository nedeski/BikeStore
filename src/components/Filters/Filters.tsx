import React from "react";
import { DetailsBlockInterface } from "./FiltersInnerface";

export const Filters = ({
  title = "Show All",
  filters = [""],
  filterParameter = "",
  filterCards,
  setFilteredCards,
  activeFilter,
  setActiveFilter,
}: DetailsBlockInterface) => {
  return (
    <div className="filterGroup">
      <h4>{title}</h4>
      {filters.map((filter) => {
        const filteredCards = filterCards(filter, filterParameter);
        const classes = "filter" + (activeFilter === filter ? " active" : "");
        return (
          <div
            key={filter}
            className={classes}
            onClick={() => {
              setFilteredCards(filteredCards);
              setActiveFilter(filter);
            }}
          >
            <span>{filter === "" ? "Show All" : filter}</span>
            <span className="badge">{filteredCards.length}</span>
          </div>
        );
      })}
    </div>
  );
};
