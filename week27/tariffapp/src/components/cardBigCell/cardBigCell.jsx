import './cardBigCell.scss';

function CardBigCell({ currency, amount, period }) {
  return (
    <div className="card-info">
      <span className="currency">{currency}</span>
      <span className="amount">{amount}</span>
      <span className="period">{period}</span>
    </div>
  );
}

export default CardBigCell;
