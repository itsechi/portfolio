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
import { variants } from '../../assets/variants';

export const Intro = (props) => {
  const scrollRef = React.useRef(null);
  const controls = useAnimation();
  const { scrollYProgress: headerScrollProgress } = useScroll({
    target: scrollRef,
    offset: ['0.16', '1'],
  });
  const headerSpring = useSpring(headerScrollProgress, variants.springPhysics);
  let leftValue = useTransform(headerSpring, [0, 1], ['0px', '-100px']);
  let rightValue = useTransform(headerSpring, [0, 1], ['0px', '100px']);

  React.useEffect(() => {
    if (props.loaded) {
      controls.start('visible');
    }
  }, [controls, props.loaded]);

  return (
    <section className={styles.intro} ref={scrollRef}>
      <motion.div
        className={styles.intro_header}
        variants={variants.containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          style={{ translateX: leftValue }}
          className={styles.intro_left}
          variants={variants.textVariants}
        >
          hello, I&rsquo;m{' '}
        </motion.h2>
        <motion.h1
          className={styles.intro_title}
          variants={variants.textVariants}
        >
          Oliwia Wardulińska
        </motion.h1>
        <motion.h2
          style={{ translateX: rightValue }}
          variants={variants.textVariants}
        >
          a front-end developer & designer
        </motion.h2>
      </motion.div>
      <motion.p
        className={styles.intro_info}
        initial="hidden"
        animate={controls}
        variants={variants.delayedVariants}
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
