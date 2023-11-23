import { Link } from '../Link/Link';
import styles from './Intro.module.scss';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimation,
} from 'framer-motion';
import React from 'react';

export const Intro = (props) => {
  const scrollRef = React.useRef(null);
  const controls = useAnimation();

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

  const headerAnimation = {
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

  const infoAnimation = {
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
        delay: 1.8,
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const containerAnimation = {
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

  React.useEffect(() => {
    if (props.loaded) {
      controls.start('visible');
    }
  }, [controls, props.loaded]);

  return (
    <section className={styles.intro} ref={scrollRef}>
      <motion.div
        className={styles.intro_header}
        variants={containerAnimation}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          style={{ translateX: leftValue }}
          className={styles.intro_left}
          variants={headerAnimation}
        >
          hello, I&rsquo;m{' '}
        </motion.h2>
        <motion.h1 className={styles.intro_title} variants={headerAnimation}>
          Oliwia Wardulińska
        </motion.h1>
        <motion.h2
          style={{ translateX: rightValue }}
          variants={headerAnimation}
        >
          a front-end developer & designer
        </motion.h2>
      </motion.div>
      <motion.p
        className={styles.intro_info}
        initial="hidden"
        animate={controls}
        variants={infoAnimation}
      >
        I&rsquo;m a passionate front-end web developer and graphic designer from
        poland. you can check out my github{' '}
        <Link
          href="https://github.com/itsechi?tab=repositories"
          name={'here'}
        />{' '}
        or scroll down to see my projects.
      </motion.p>
    </section>
  );
};
