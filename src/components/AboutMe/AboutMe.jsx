import styles from './AboutMe.module.scss';
import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import React from 'react';

export const AboutMe = () => {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  const { scrollYProgress: headerScrollProgress } = useScroll({
    target: ref,
    offset: ['-1', '0'],
  });

  const headerSpring = useSpring(headerScrollProgress, {
    stiffness: 100,
    damping: 30,
  });

  let leftValue = useTransform(headerSpring, [0, 1], ['135px', '0px']);

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
    <motion.section
      className={styles.aboutMe}
      variants={containerVariants}
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      <div className={styles.aboutMe_header}>
        <motion.h2 style={{ translateX: leftValue }} variants={textVariants} className={styles.aboutMe_left}>
          Read more
        </motion.h2>
        <motion.h1 variants={textVariants} className={styles.aboutMe_title}>
          about me
        </motion.h1>
      </div>
      <motion.p variants={textVariants} className={styles.aboutMe_text}>
        Hello, my name is Oliwia Wardulińska and I&rsquo;m a self-taught
        front-end developer and graphic designer. Itsechi is the nickname I use
        across social medias. I build responsive, accessible websites from
        scratch that look and feel fresh and creative. I&rsquo;m committed to
        developing products that focus on usability and simplicity.
      </motion.p>
      <motion.p variants={textVariants} className={styles.aboutMe_text}>
        I love learning new things and technologies and I&rsquo;m always
        gathering inspiration and exploring different ideas and techniques.
        I&rsquo;m curious and passionate, especially when it comes to art, music
        and gaming.
      </motion.p>
    </motion.section>
  );
};
