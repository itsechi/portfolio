import { Link } from '../Link/Link';
import styles from './Contact.module.scss';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import React from 'react';

export const Contact = () => {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  const { scrollYProgress: headerScrollProgress } = useScroll({
    target: ref,
    offset: ['-1', '-0.9'],
  });

  const headerSpring = useSpring(headerScrollProgress, {
    stiffness: 100,
    damping: 30,
  });

  let leftValue = useTransform(headerSpring, [0, 1], ['-80px', '0px']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1 * i,
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
      className={styles.contact}
      variants={containerVariants}
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      <div className={styles.contact_header}>
        <motion.h1 variants={textVariants} className={styles.contact_title}>
          Contact me
        </motion.h1>
        <motion.h2
          style={{ translateX: leftValue }}
          variants={textVariants}
          className={styles.contact_left}
        >
          Let&rsquo;s get in touch!
        </motion.h2>
      </div>
      <motion.div variants={textVariants} className={styles.contact_text}>
        <Link
          name={'wardulinskao@gmail.com'}
          theme={'large'}
          href={'mailto:wardulinskao@gmail.com'}
        />
        <div className={styles.contact_websites}>
          <Link name={'LinkedIn'} theme={'normal'} href={'#'} />
          <Link
            name={'Github'}
            theme={'normal'}
            href={'https://github.com/itsechi'}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
