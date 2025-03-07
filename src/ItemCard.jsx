import styles from './ItemCard.module.css';

export const ItemCard = ({ item: { status, title, description } }) => {
  let titleClass = styles['itemCard__title'];
  let statusClass = styles['itemCard__status'];

  if (status === 'done') {
    titleClass = styles['itemCard__title--done'];
    statusClass = styles['itemCard__status--done'];
  }

  if (status === 'in progress') {
    titleClass = styles['itemCard__title--in-progress'];
    statusClass = styles['itemCard__status--in-progress'];
  }

  if (status === 'pending') {
    titleClass = styles['itemCard__title--pending'];
    statusClass = styles['itemCard__status--pending'];
  }

  return (
    <>
      <h4 className={titleClass}>{title}</h4>
      <p>{description}</p>
      <span className={statusClass}>{status}</span>
    </>
  );
};
