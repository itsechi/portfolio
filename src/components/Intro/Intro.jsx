import { Link } from '../Link/Link';
import styles from './Intro.module.scss';

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro_header}>
        <h2 className={styles.intro_left}>hello, I&rsquo;m </h2>
        <h1 className={styles.intro_title}>Oliwia Wardulińska</h1>
        <h2>a front-end developer & designer</h2>
      </div>
      <p className={styles.intro_info}>
        I’m a passionate front-end web developer and graphic designer from
        poland. you can check out my github{' '}
        <Link
          href="https://github.com/itsechi?tab=repositories"
          name={'here'}
        />{' '}
        or scroll down to see my projects.
      </p>
    </section>
  );
};
