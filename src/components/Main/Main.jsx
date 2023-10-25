import { Intro } from '../Intro/Intro';
import { Projects } from '../Projects/Projects';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Intro />
      <Projects />
    </main>
  );
};
