import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimation,
} from 'framer-motion';
import styles from './Intro.module.scss';
import { variants } from '../../assets/js/variants';
import { Link } from '../Link/Link';

export const Intro = (props) => {
  const scrollRef = React.useRef();
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['0.16', '1'],
  });
  const headerSpring = useSpring(scrollYProgress, variants.springPhysics);
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
          hello, I&rsquo;m
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
        poland. you can check out my{' '}
        <Link
          href="https://github.com/itsechi?tab=repositories"
          name={'github'}
          label={'Click here to view my github profile'}
        />{' '}
        or scroll down to see my projects.
      </motion.p>
    </section>
  );
};
