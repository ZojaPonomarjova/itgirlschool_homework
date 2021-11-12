import "./cardCell.scss";

function CardCell(props) {
  return (
    <div className={props.className} id={props.id}>
      {props.text}
    </div>
  );
}

export default CardCell;
