import "./tariff.scss";
import CardBigCell from "../cardBigCell";
import CardCell from "../cardCell";

function Tariffs(props) {
  let className;
  return (
    <div className={`card ${props.className1}`} id={props.id}>
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
