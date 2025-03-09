import styles from './listheader.module.css';

export const ListHeader = ({ content }) => {
  return <h3 className={styles.ListHeader}>{content}</h3>;
};
