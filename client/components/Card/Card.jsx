import styles from './Card.module.scss';

const Card = ({title, children}) => {


  return (
    <div className={styles.card}>
      {
        title &&
        <div className={styles.cardHeader}>
          {title}
        </div>
      }
      <div className={styles.cardBody}>
        {children}
      </div>
    </div>
  )
}

export default Card;