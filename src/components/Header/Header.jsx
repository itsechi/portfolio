import styles from './Header.module.scss';

export const Header = () => {
  const NavLink = (props) => {
    return <li className={styles.nav_link}>{props.title}</li>;
  };

  return (
    <header className={styles.header}>
      <p className={styles.header_logo}>Itsechi</p>
      <nav>
        <ul className={styles.nav_links}>
          <NavLink title={'home'} />
          <NavLink title={'projects'} />
          <NavLink title={'about me & contact'} />
        </ul>
      </nav>
    </header>
  );
};
