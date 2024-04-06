import React from "react";
import { Header } from "../Header/Header";
import { Filters } from "../Filters/Filters";
import { Card } from "../Card/Card";
import { Footer } from "../Footer/Footer";
import { CardInterfce } from "../Card/CardInerface";
import { useState, useEffect } from "react";
import axios from "axios";

export const AppWrapper = () => {
  const [cards, setCards] = useState<CardInterfce[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardInterfce[]>([]);
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://challenges.brainster.tech/ajax_data/data.json")
        .then((res) => {
          setCards(res.data.products);
          setFilteredCards(res.data.products);
        });
    };
    fetchData();
  }, []);

  const brands = cards.reduce((brandSortedData: string[], el: CardInterfce) => {
    if (!brandSortedData.includes(el.brand)) {
      brandSortedData = [...brandSortedData, el.brand];
    }
    return brandSortedData;
  }, []);

  const gender = cards.reduce(
    (genderSortedData: string[], el: CardInterfce) => {
      if (!genderSortedData.includes(el.gender)) {
        genderSortedData = [...genderSortedData, el.gender];
      }
      return genderSortedData;
    },
    []
  );

  const filterCards = (
    filterParameter: string,
    filterCategory: string
  ): CardInterfce[] => {
    if (filterCategory === "") {
      return cards;
    }

    const filteredCards = cards.filter(
      (el: any) => el[filterCategory] === filterParameter
    );
    return filteredCards;
  };

  return (
    <div className="appWrapper">
      <Header />
      <main>
        <div className="mainTitle">
          <hr />
          <br />
          <h1>Bikes</h1>
        </div>
        <div className="mainWrapper">
          <div className="filterWrapper">
            <Filters
              title="Filter by:"
              filterCards={filterCards}
              setFilteredCards={setFilteredCards}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            <hr />
            <Filters
              title="Gender"
              filterParameter="gender"
              filters={gender}
              filterCards={filterCards}
              setFilteredCards={setFilteredCards}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            <hr />
            <Filters
              title="Brand"
              filterParameter="brand"
              filters={brands}
              filterCards={filterCards}
              setFilteredCards={setFilteredCards}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>

          <div className="cardWrapper">
            {filteredCards.map((el, key) => (
              <Card key={key} {...el} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
