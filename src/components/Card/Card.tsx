import { useState, useEffect } from "react";
import { CardInterfce } from "./CardInerface";

export const Card = (cardObj: CardInterfce) => {
  return (
    <div className="card">
      <img src={`./img/${cardObj.image}.png`} />
      <div className="cardTextContainer">
        <h5>{cardObj.name}</h5>
        <p>{cardObj.price} $</p>
      </div>
    </div>
  );
};
