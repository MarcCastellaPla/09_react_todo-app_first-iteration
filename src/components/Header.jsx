import styles from './Header.module.css';

export const Header = ({ title }) => {
  return <h1 className={styles.header__title}>{title}</h1>;
};
