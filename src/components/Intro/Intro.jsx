import styles from './Intro.module.scss';

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.intro_header}>
        <h2 className={styles.intro_left}>hello, I&rsquo;m </h2>
        <h1 className={styles.intro_title}>Oliwia Wardulińska</h1>
        <h2>a front-end developer & designer</h2>
      </div>
      <p className={styles.intro_info}>
        I’m a passionate front-end web developer and graphic designer from
        poland. you can check out my github{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/itsechi?tab=repositories"
          className={styles.intro_bold}
        >
          here
        </a>{' '}
        or scroll down to see my projects.
      </p>
    </div>
  );
};
