import { Header } from '../Header/Header';
import { Intro } from '../Intro/Intro';
import { Projects } from '../Projects/Projects';
import { Fluid } from '../Fluid/Fluid';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Fluid />
      <Intro />
      {/* <Projects /> */}
    </main>
  );
};
