import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';
import styles from './Projects.module.scss';
import { images } from '../../assets/js/images';
import { Link } from '../Link/Link';
import { Project } from './Project';
import { variants } from '../../assets/js/variants';

export const Projects = () => {
  const ref = React.useRef();
  const scrollRef = React.useRef();
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: scrollRef,
    offset: ['-0.5', '1'],
  });
  const projectsSpring = useSpring(
    projectsScrollProgress,
    variants.springPhysics
  );
  let translateValue = useTransform(
    projectsSpring,
    [0, 1],
    ['200px', '-450px']
  );

  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);

  return (
    <section className={styles.projects}>
      <motion.h2 className={styles.projects_header}>Projects</motion.h2>
      <div className={styles.projects_grid} ref={scrollRef}>
        <Project
          classes={styles.project}
          tags={['React', 'Firebase', 'Vite', 'SCSS', 'CSS modules']}
          title={'Twitter Clone'}
          description={`A Twitter clone built with React and Firebase. The users can edit their profile, follow and unfollow accounts, write and like tweets and visit other profiles. I made it possible for users to log in through Google or use the site as a guest to test the functionality.`}
          website={'https://itsechi.github.io/twitter-clone/'}
          img={images.twitter}
          alt={'twitter clone page screenshot'}
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={[
            'TypeScript',
            'React',
            'MongoDB',
            'Node.js',
            'Express',
            'Tailwind CSS',
            'Vite',
          ]}
          title={'Todo List'}
          description={`A simple task organizer made with TypeScript and the MERN stack. The user can add, edit and delete lists and tasks, log in with Google or use local storage to save tasks and monitor progress with a progress bar for each list.`}
          website={'https://itsechi.github.io/typescript-todo/'}
          img={images.todoList}
          alt={'todo list app'}
        />

        <Project
          classes={styles.project}
          tags={['JavaScript', 'Webpack', 'SCSS']}
          title={'Weather App'}
          description={`Weather app that displays current forecast data for a given location. It was a part of the The Odin Project curriculum and I made it with a model-view-controller design pattern. I created the design in Figma using grids for the first time and I focused on making the design user-friendly and minimalistic.`}
          website={'https://itsechi.github.io/weather/'}
          img={images.weather}
          alt={'weather app ui design'}
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['React', 'Firebase', 'SCSS', 'Jest', 'CSS modules']}
          title={'Shopping Cart'}
          description={`A simple fake store React application made to practice routing, Jest testing and using CSS modules. It allows users to log in through Google, browse the store catalog, add items to cart and store that information in the Firebase database. I wanted the design to be simple yet effective.`}
          website={'https://itsechi.github.io/shopping-cart/'}
          img={images.shoppingCart}
          alt={'shopping site front page'}
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['React', 'Firebase', 'Vite', 'CSS']}
          title={`Where's waldo?`}
          description={`A Stardew Valley themed Where's Waldo type of game made with React and Firebase. The user must find three hidden characters in the shortest time possible. They can then submit their score and name to the leaderboard which is stored in the Firebase. I wanted to recreate the pixel art vibe of the game while keeping things plain and simple.`}
          website={'https://itsechi.github.io/wheres-waldo/'}
          img={images.wheresWaldo}
          alt={'where is waldo game screenshot'}
        />

        <motion.div
          className={styles.project}
          variants={variants.containerVariants}
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
        >
          <motion.h3
            variants={variants.textVariants}
            className={styles.project_largeText}
          >
            Want to see more?
          </motion.h3>
          <motion.p variants={variants.textVariants}>
            If you&rsquo;d like to see more design-oriented projects, you can
            view my{' '}
            <Link
              href="https://itsechi.github.io/restaurant/"
              name={'Pure Cove Restaurant site'}
              label={'Check out the Pure Cove Restaurant site'}
            />
            ,{' '}
            <Link
              href="https://itsechi.github.io/admin-dashboard/"
              name={'Admin Dashboard'}
              label={'Check out the Admin Dashboard site'}
            />{' '}
            or{' '}
            <Link
              href="https://itsechi.github.io/cv-project/"
              name={'the CV Creator'}
              label={'Check out the CV Creator site'}
            />
            .
          </motion.p>
          <motion.p variants={variants.textVariants}>
            If you want to play some of the games I&rsquo;ve made, you can check
            out my{' '}
            <Link
              href="https://itsechi.github.io/memory-card/"
              name={'Memory Card'}
              label={'Check out the Memory Card game'}
            />
            ,{' '}
            <Link
              href="https://itsechi.github.io/battleship/"
              name={'Battleship'}
              label={'Check out Battleship game'}
            />{' '}
            or{' '}
            <Link
              href="https://itsechi.github.io/tic-tac-toe/"
              name={'Tic-Tac-Toe'}
              label={'Check out the Tic-Tac-Toe game'}
            />{' '}
            apps.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
