import styles from './ItemCard.module.css';

export const ItemCard = ({ item: { status, title, description } }) => {
  let statusClassModifier = styles['itemCard__status'];

  if (status === 'done') {
    statusClassModifier = styles['itemCard__status--done'];
  }
  if (status === 'in progress') {
    statusClassModifier = styles['itemCard__status--in-progress'];
  }
  if (status === 'pending') {
    statusClassModifier = styles['itemCard__status--pending'];
  }

  return (
    <>
      <h4 className={styles.itemCard__title}>{title}</h4>
      <p className={styles.itemCard__description}>{description}</p>
      <span className={`${styles.itemCard__status} ${statusClassModifier}`}>
        {status.toUpperCase()}
      </span>
    </>
  );
};
