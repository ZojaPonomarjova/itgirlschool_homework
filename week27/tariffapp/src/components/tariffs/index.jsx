import "./tariff.scss";
// import { useState } from "react";
import CardBigCell from "../cardBigCell";
import CardCell from "../cardCell";
// import classnames from "classnames";

function Tariffs(props) {
  // const className1 = "";

  // const [isSelected, setSelected] = useState(props.isSelected || false);

  // const handleChange = () => {
  //   setSelected(!isSelected);
  // };
  // {
  //   isSelected ? (className1 = "selected") : "";
  // }
  return (
    <div
      className={`card${props.isSelected ? " selected" : ""}`}
      id={props.id}
      // selected={props.isSelected}
      // onClick={handleChange}
      // onMouseOver={handleChange}
      onClick={props.onClick}
    >
      <CardCell className={props.className2} text={props.name} />
      <CardBigCell
        className={props.className3}
        currency={props.currency}
        amount={props.amount}
        period={props.period}
      />
      <CardCell className="card-speed" text={props.speed} />
      <CardCell className="card-options" text={props.option} />
    </div>
  );
}

export default Tariffs;
