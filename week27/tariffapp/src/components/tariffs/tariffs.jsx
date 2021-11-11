import React from "react";
import "./tariffs.scss";
import CardBigCell from "../cardBigCell/cardBigCell";
import CardCell from "../cardCell/cardCell";

import classnames from "classnames";

const tariffs = [
  [
    [{ text: "Безлимитный 300" }, { id: "300-1" }],
    [{ text: "До 10 Мбит/сек" }, { id: "300-2" }],
    [{ text: "Объем включенного трафика не ограничен" }, { id: "300-3" }],
    [
      { currency: "руб" },
      { amount: "300" },
      { period: "/мес" },
      { id: "300-4" },
    ],
  ],
  [
    [{ text: "Безлимитный 450" }, { id: "450-1" }],
    [{ text: "До 50 Мбит/сек" }, { id: "450-2" }],
    [{ text: "Объем включенного трафика не ограничен" }, { id: "450-3" }],
    [
      { currency: "руб" },
      { amount: "450" },
      { period: "/мес" },
      { id: "300-4" },
    ],
  ],
  [
    [{ text: "Безлимитный 550" }, { id: "550-1" }],
    [{ text: "До 100 Мбит/сек" }, { id: "550-2" }],
    [{ text: "Объем включенного трафика не ограничен" }, { id: "550-3" }],
    [
      { currency: "руб" },
      { amount: "550" },
      { period: "/мес" },
      { id: "300-4" },
    ],
  ],
  [
    [{ text: "Безлимитный 1000" }, { id: "1000-1" }],
    [{ text: "До 200 Мбит/сек" }, { id: "1000-2" }],
    [{ text: "Объем включенного трафика не ограничен" }, { id: "1000-3" }],
    [
      { currency: "руб" },
      { amount: "1000" },
      { period: "/мес" },
      { id: "300-4" },
    ],
  ],
];

function Tariffs() {
  let className;
  return (
    <React.Fragment>
      {tariffs.map((card, i) => (
        <div
          className={
            (className = classnames("card", {
              selected: i === 2,
            }))
          }
          key={`${card[0][1].id}-${i}`}
          id={`${card[0][1].id}-${i}`}
        >
          <CardCell
            text={card[0][0].text}
            id={card[0][1].id}
            className={
              (className = classnames("card-header", {
                blue: i === 0,
                green: i === 1,
                red: i === 2,
                grey: i === 3,
              }))
            }
          />
          <CardBigCell
            currency={card[3][0].currency}
            amount={card[3][1].amount}
            period={card[3][2].period}
            id={card[3][3].id}
            className={
              (className = classnames("", {
                cardInfo_blue: i === 0,
                cardInfo_green: i === 1,
                cardInfo_red: i === 2,
                cardInfo_grey: i === 3,
              }))
            }
          />
          <CardCell
            text={card[1][0].text}
            id={card[1][1].id}
            className="card-speed"
          />
          <CardCell
            text={card[2][0].text}
            id={card[2][1].id}
            className="card-options"
          />
        </div>
      ))}
    </React.Fragment>
  );
}

export default Tariffs;
