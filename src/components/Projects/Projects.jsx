import styles from './Projects.module.scss';
import weather from '../../assets/weather.png';
import shoppingCart from '../../assets/shoppingcart.png';
import twitter from '../../assets/twitter.png';
import todoList from '../../assets/todoList.png';
import wheresWaldo from '../../assets/wheresWaldo.png';
import { Link } from '../Link/Link';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';
import React from 'react';
import { Project } from './Project';

export const Projects = () => {
  const scrollRef = React.useRef(null);

  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: scrollRef,
    offset: ['-0.5', '1'],
  });

  const projectsSpring = useSpring(projectsScrollProgress, {
    stiffness: 100,
    damping: 30,
  });

  let translateValue = useTransform(
    projectsSpring,
    [0, 1],
    ['200px', '-450px']
  );

  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5 * i,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: `50px`,
      rotate: 4,
    },
    visible: {
      opacity: 1,
      y: `0px`,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <section className={styles.projects}>
      <div className={styles.projects_headerRef}></div>
      <motion.h2 className={styles.projects_header}>Projects</motion.h2>
      <div className={styles.projects_grid} ref={scrollRef}>
        <Project
          classes={styles.project}
          tags={['React', 'Firebase', 'Vite', 'SCSS', 'CSS modules']}
          title={'Twitter Clone'}
          description={`A Twitter clone built with React and Firebase. The users can edit their profile, follow and unfollow accounts, write and like tweets and visit other profiles. I made it possible for users to log in through Google or use the site as a guest to test the functionality.`}
          website={'https://itsechi.github.io/twitter-clone/'}
          img={twitter}
        />
        <motion.div
          className={[styles.project, styles.project_uneven].join(' ')}
          style={{ translateY: translateValue }}
        >
          <Project
            tags={['React', 'Firebase', 'SCSS', 'Jest', 'CSS modules']}
            title={'Shopping Cart'}
            description={`A simple fake store React application made to practice routing, Jest testing and using CSS modules. It allows users to log in through Google, browse the store catalog, add items to cart and store that information in the Firebase database. I wanted the design to be simple yet effective.`}
            website={'https://itsechi.github.io/shopping-cart/'}
            img={shoppingCart}
          />
        </motion.div>
        <Project
          classes={styles.project}
          tags={['JavaScript', 'Webpack', 'SCSS']}
          title={'Weather App'}
          description={`Weather app that displays current forecast data for a given location. It was a part of the The Odin Project curriculum and I made it with a model-view-controller design pattern. I created the design in Figma using grids for the first time and I focused on making the design user-friendly and minimalistic.`}
          website={'https://itsechi.github.io/weather/'}
          img={weather}
        />
        <motion.div
          className={[styles.project, styles.project_uneven].join(' ')}
          style={{ translateY: translateValue }}
        >
          <Project
            tags={['JavaScript', 'Webpack', 'SCSS']}
            title={'Todo List'}
            description={`A simple task organizer made with pure JavaScript. The user can add projects, add and edit tasks, sort the tasks by due date, name and date of creation, delete taks and projects, set priority of the tasks and monitor their progress with a progress bar for each project.`}
            website={'https://itsechi.github.io/todo-list/'}
            img={todoList}
          />
        </motion.div>

        <motion.div
          className={styles.project}
          variants={containerVariants}
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
        >
          <motion.h3
            variants={textVariants}
            className={styles.project_largeText}
          >
            Want to see more?
          </motion.h3>
          <motion.p variants={textVariants}>
            If you&rsquo;d like to see more design-oriented projects, you can
            view my{' '}
            <Link
              href="https://itsechi.github.io/restaurant/"
              name={'Pure Cove Restaurant site'}
            />
            ,{' '}
            <Link
              href="https://itsechi.github.io/admin-dashboard/"
              name={'Admin Dashboard'}
            />{' '}
            or{' '}
            <Link
              href="https://itsechi.github.io/cv-project/"
              name={'the CV Creator'}
            />
            .
          </motion.p>

          <motion.p variants={textVariants}>
            If you want to play some of the games I&rsquo;ve made, you can check
            out my{' '}
            <Link
              href="https://itsechi.github.io/memory-card/"
              name={'Memory Card'}
            />
            ,{' '}
            <Link
              href="https://itsechi.github.io/battleship/"
              name={'Battleship'}
            />{' '}
            or{' '}
            <Link
              href="https://itsechi.github.io/tic-tac-toe/"
              name={'Tic-Tac-Toe'}
            />{' '}
            apps.
          </motion.p>
        </motion.div>

        <motion.div
          className={[styles.project, styles.project_uneven].join(' ')}
          style={{ translateY: translateValue }}
        >
          <Project
            tags={['React', 'Firebase', 'Vite', 'CSS']}
            title={`Where's waldo?`}
            description={`A Stardew Valley themed Where's Waldo type of game made with React and Firebase. The user must find three hidden characters in the shortest time possible. They can then submit their score and name to the leaderboard which is stored in the Firebase. I wanted to recreate the pixel art vibe of the game while keeping things plain and simple.`}
            website={'https://itsechi.github.io/wheres-waldo/'}
            img={wheresWaldo}
          />
        </motion.div>
      </div>
    </section>
  );
};
