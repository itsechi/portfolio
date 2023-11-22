import { Link } from '../Link/Link';
import styles from './Intro.module.scss';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import React from 'react';

export const Intro = () => {
  const scrollRef = React.useRef(null);

  const { scrollYProgress: headerScrollProgress } = useScroll({
    target: scrollRef,
    offset: ['0.16', '1'],
  });

  const headerSpring = useSpring(headerScrollProgress, {
    stiffness: 100,
    damping: 30,
  });

  let leftValue = useTransform(headerSpring, [0, 1], ['0px', '-100px']);
  let rightValue = useTransform(headerSpring, [0, 1], ['0px', '100px']);

  return (
    <section className={styles.intro} ref={scrollRef}>
      <div className={styles.intro_header}>
        <motion.h2
          style={{ translateX: leftValue }}
          className={styles.intro_left}
        >
          hello, I&rsquo;m{' '}
        </motion.h2>
        <h1 className={styles.intro_title}>Oliwia Wardulińska</h1>
        <motion.h2 style={{ translateX: rightValue }}>
          a front-end developer & designer
        </motion.h2>
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
