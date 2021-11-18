import React, { useState } from "react";
import "./tariffContainer.scss";
import Tariff from "../tariffs";
import tariffs from "../data";
import classnames from "classnames";

function TariffContainer() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(2);
  const handleClick = id => {
    setSelectedCardIndex(id);
  };

  return (
    <React.Fragment>
      {tariffs.map((card, i) => (
        <Tariff
          key={`${card.id}-${i}`}
          onClick={() => handleClick(i)}
          isSelected={i === selectedCardIndex}
          // isSelected={i === 2}
          className2={classnames("card-header", {
            blue: i === 0,
            green: i === 1,
            red: i === 2,
            grey: i === 3,
          })}
          className3={classnames("", {
            cardInfo_blue: i === 0,
            cardInfo_green: i === 1,
            cardInfo_red: i === 2,
            cardInfo_grey: i === 3,
          })}
          currency={card.currency}
          amount={card.amount}
          period={card.period}
          id={card.id}
          name={card.name}
          speed={card.speed}
          option={card.option}
        />
      ))}
    </React.Fragment>
  );
}

export default TariffContainer;
