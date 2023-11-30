import { Link } from '../Link/Link';
import { variants } from '../../../public/assets/js/variants';
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-3', '-2.4'],
  });
  const headerSpring = useSpring(scrollYProgress, variants.springPhysics);
  let transformValue = useTransform(headerSpring, [0, 1], ['-80px', '0px']);

  return (
    <motion.section
      className={styles.contact}
      variants={variants.containerVariants}
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      <div className={styles.contact_header}>
        <motion.h1
          variants={variants.textVariants}
          className={styles.contact_title}
        >
          Contact me
        </motion.h1>
        <motion.h2
          style={{ translateX: transformValue }}
          variants={variants.textVariants}
          className={styles.contact_right}
        >
          Let&rsquo;s get in touch!
        </motion.h2>
      </div>
      <motion.div
        variants={variants.textVariants}
        className={styles.contact_text}
      >
        <Link
          name={'wardulinskao@gmail.com'}
          theme={'large'}
          href={'mailto:wardulinskao@gmail.com'}
        />
        <div className={styles.contact_websites}>
          <Link name={'LinkedIn'} href={'#'} />
          <Link name={'Github'} href={'https://github.com/itsechi'} />
        </div>
      </motion.div>
    </motion.section>
  );
};
