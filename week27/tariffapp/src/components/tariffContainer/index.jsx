import React from "react";
import "./tariffContainer.scss";
import Tariff from "../tariffs";

import classnames from "classnames";

const tariffs = [
  {
    id: "300",
    name: "Безлимитный 300",
    speed: "До 10 Мбит/сек",
    option: "Объем включенного трафика не ограничен",
    currency: "руб",
    amount: "300",
    period: "/мес",
  },
  {
    id: "450",
    name: "Безлимитный 450",
    speed: "До 50 Мбит/сек",
    option: "Объем включенного трафика не ограничен",
    currency: "руб",
    amount: "300",
    period: "/мес",
  },
  {
    id: "550",
    name: "Безлимитный 550",
    speed: "До 100 Мбит/сек",
    option: "Объем включенного трафика не ограничен",
    currency: "руб",
    amount: "550",
    period: "/мес",
  },
  {
    id: "1000",
    name: "Безлимитный 1000",
    speed: "До 200 Мбит/сек",
    option: "Объем включенного трафика не ограничен",
    currency: "руб",
    amount: "1000",
    period: "/мес",
  },
];

function TariffContainer() {
  let className;
  return (
    <React.Fragment>
      {tariffs.map((card, i) => (
        <Tariff
          key={`${card.id}-${i}`}
          className2={
            (className = classnames("card-header", {
              blue: i === 0,
              green: i === 1,
              red: i === 2,
              grey: i === 3,
            }))
          }
          className1={
            (className = classnames("", {
              selected: i === 2,
            }))
          }
          className3={
            (className = classnames("", {
              cardInfo_blue: i === 0,
              cardInfo_green: i === 1,
              cardInfo_red: i === 2,
              cardInfo_grey: i === 3,
            }))
          }
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
