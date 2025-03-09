import { ItemCard } from './ItemCard';
import styles from './ItemsList.module.css';

export const ItemsList = ({ itemsList }) => {
  return (
    <ul>
      {itemsList.map((item) => (
        <li key={item.uuid} className={styles['task__wrapper']}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
};
