import './cardCell.scss';
// import classnames from 'classnames';
// const CardCell = props => {
//     const className = classnames('card-header', {
//       primary: props.type === 'primary',
//       danger: props.type === 'danger',
//       disabled: props.disabled,
//     });
//   return (
//     <div className={props.className} id={props.id}>
//       {props.text}
//     </div>
//   );
// };

function CardCell(props) {
  return (
    <div className={props.className} id={props.id}>
      {props.text}
    </div>
  );
}

export default CardCell;
