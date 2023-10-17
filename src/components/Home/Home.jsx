import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main>
      <div className={styles.intro}>
        <h2 className={styles.intro_left}>hello, I&rsquo;m </h2>
        <h1 className={styles.intro_title}>Oliwia Wardulińska</h1>
        <h2>a front-end developer & designer</h2>
      </div>
    </main>
  );
};
