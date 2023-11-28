import styles from './Header.module.scss';
import {
  useScroll,
  useMotionValueEvent,
  motion,
  useAnimation,
  useTransform,
  useSpring,
} from 'framer-motion';
import React from 'react';
import { variants } from '../../assets/js/variants';

export const Header = () => {
  const { scrollY } = useScroll();
  const scrollYRange = [0, 250];
  const widthSpring = useSpring(scrollY, variants.springPhysics);
  const width = useTransform(widthSpring, scrollYRange, ['0%', '100%']);

  const controls = useAnimation();
  const delta = React.useRef(0);
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, 'change', (val) => {
    const diff = Math.abs(val - lastScrollY.current);
    if (val >= lastScrollY.current) {
      delta.current = delta.current >= 10 ? 10 : delta.current + diff;
    } else {
      delta.current = delta.current <= -10 ? -10 : delta.current - diff;
    }

    if (delta.current >= 10 && val > 150) {
      controls.start('hidden');
    } else if (delta.current <= -10 || val < 150) {
      controls.start('visible');
    }
    lastScrollY.current = val;
  });

  const NavLink = (props) => {
    const scrollTop = () => window.scrollTo({ top: props.scroll });

    return (
      <li className={styles.nav_link} onClick={scrollTop}>{props.title}</li>
    );
  };

  return (
    <motion.header
      className={styles.header}
      initial="visible"
      animate={controls}
      variants={variants.headerVariants}
    >
      {/* make it scale instead */}
      <motion.div
        className={styles.header_borderLeft}
        style={{
          width: width,
        }}
      ></motion.div>
      <motion.div
        className={styles.header_borderRight}
        style={{
          width: width,
        }}
      ></motion.div>
      <p className={styles.header_logo}>Itsechi</p>

      <nav>
        <ul className={styles.nav_links}>
          <NavLink title={'home'} href={'#home'} scroll={0} />
          <NavLink title={'projects'} href={'#projects'} scroll={900} />
          <NavLink
            title={'about me & contact'}
            href={'#aboutme'}
            scroll={4000}
          />
        </ul>
      </nav>
    </motion.header>
  );
};
