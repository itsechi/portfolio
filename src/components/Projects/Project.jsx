import { useParallax } from '../../assets/js/useParallax';
import { variants } from '../../assets/js/variants';
import { motion, useInView } from 'framer-motion';
import icons from '../../assets/icons.svg';
import styles from './Projects.module.scss';
import React from 'react';

export const Project = (props) => {
  const {
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  } = useParallax();
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  const projectTags = props.tags.map((tag) => (
    <li className={styles.project_tag} key={tag}>
      {tag}
    </li>
  ));

  return (
    <motion.article
      className={props.classes}
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants.containerVariants}
      style={{ translateY: props.translateValue }}
    >
      <motion.img
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
        whileHover={{
          scale: 1.05,
        }}
        style={{
          x: primaryX,
          y: primaryY,
        }}
        className={styles.project_image}
        variants={variants.imageVariants}
        animate={isInView ? 'visible' : 'hidden'}
        ref={ref}
        src={props.img}
        alt={props.alt}
      ></motion.img>
      <motion.div
        style={{
          x: secondaryX,
          y: secondaryY,
        }}
        variants={variants.textVariants}
      >
        <h3 className={styles.project_title}>{props.title}</h3>
        <ul className={styles.project_tags}>{projectTags}</ul>
      </motion.div>
      <motion.p
        variants={variants.textVariants}
        className={styles.project_description}
      >
        {props.description}
      </motion.p>
      <motion.a
        className={styles.project_website}
        href={props.website}
        target="_blank"
        rel="noopener noreferrer"
        variants={variants.textVariants}
        aria-label={`Check out the ${props.title} site`}
      >
        <svg aria-hidden="true">
          <use href={`${icons}#link`}></use>
        </svg>
        View project{' '}
      </motion.a>
    </motion.article>
  );
};
