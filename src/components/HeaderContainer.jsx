import styles from './headerContainer.module.css';

export const HeaderContainer = ({ children }) => {
  return <header className={styles['header__container']}>{children}</header>;
};
