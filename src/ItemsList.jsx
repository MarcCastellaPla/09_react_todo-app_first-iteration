// import styles from './ItemsList.module.css';
import { ItemCard } from './ItemCard';

export const ItemsList = ({ itemsList }) => {
  console.log(itemsList);

  return (
    <ul>
      {itemsList.map((item) => (
        <li key={item.uuid}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
};
