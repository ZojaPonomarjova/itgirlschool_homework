import styles from "./cardBigCell.module.scss";

function CardBigCell({ currency, amount, period, id, className }) {
  return (
    <div className={`${styles.cardInfo} ${className}`} id={id}>
      <span className={styles.currency}>{currency}</span>
      <span className={styles.amount}>{amount}</span>
      <span className={styles.period}>{period}</span>
    </div>
  );
}

export default CardBigCell;
