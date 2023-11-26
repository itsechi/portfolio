import styles from './Header.module.scss';

export const Header = () => {
  {
    /* fix the hrefs */
  }
  const NavLink = (props) => {
    return (
      <li className={styles.nav_link}>
        <a href={props.href}>{props.title}</a>
      </li>
    );
  };

  return (
    <header className={styles.header}>
      <p className={styles.header_logo}>Itsechi</p>
      <nav>
        <ul className={styles.nav_links}>
          <NavLink title={'home'} href={'#home'} />
          <NavLink title={'projects'} href={'#projects'} />
          <NavLink title={'about me & contact'} href={'#aboutme'} />
        </ul>
      </nav>
    </header>
  );
};
