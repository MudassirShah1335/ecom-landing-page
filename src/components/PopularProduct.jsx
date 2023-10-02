import React from "react";
import EcommerceCard from "./Card";

function PopularProduct() {
  const cards = [];

  for (let i = 0; i < 8; i++) {
    cards.push(<EcommerceCard key={i} />);
  }

  const cardGroups = [];

  for (let i = 0; i < cards.length; i += 4) {
    cardGroups.push(
      <div
        className="flex flex-row items-center justify-center gap-5 space-y-10"
        key={i}
      >
        {cards.slice(i, i + 4)}
      </div>
    );
  }

  return (
    <div className="mt-20">
      <h1 className="text-4xl text-black font-bold mx-20 flex items-center justify-center">
        Weekly Popular Products
      </h1>
      {cardGroups}
    </div>
  );
}

export default PopularProduct;
