import { AboutMe } from '../AboutMe/AboutMe';
import { Contact } from '../Contact/Contact';
import { Intro } from '../Intro/Intro';
import { Projects } from '../Projects/Projects';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Intro />
      <Projects />
      <div className={styles.main_aboutAndContact}>
        <AboutMe />
        <Contact />
      </div>
    </main>
  );
};
