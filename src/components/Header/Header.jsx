import styles from './Header.module.scss';

export const Header = () => {

  const NavLink = (props) => {
    const scrollTop = () => window.scrollTo({ top: props.scroll });

    return (
      <li className={styles.nav_link} onClick={scrollTop}>
        {props.title}
      </li>
    );
  };

  return (
    <header className={styles.header}>
        <p className={styles.header_logo}>Itsechi</p>
        <nav>
          <ul className={styles.nav_links}>
            <NavLink title={'home'} href={'#home'} scroll={0} />
            <NavLink title={'projects'} href={'#projects'} scroll={900} />
            <NavLink
              title={'about me & contact'}
              href={'#aboutme'}
              scroll={4000}
            />
          </ul>
        </nav>
    </header>
  );
};
