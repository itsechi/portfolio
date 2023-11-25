import { useParallax } from '../../assets/useParallax';
import styles from './Projects.module.scss';
import { motion, useInView } from 'framer-motion';
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

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

  const projectTags = props.tags.map((tag) => (
    <p className={styles.project_tag} key={tag}>
      {tag}
    </p>
  ));

  return (
    <motion.article
      className={props.classes}
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
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
        src={props.img}
        variants={imageVariants}
        animate={isInView ? 'visible' : 'hidden'}
        ref={ref}
      ></motion.img>
      <motion.div
        style={{
          x: secondaryX,
          y: secondaryY,
        }}
        variants={textVariants}
      >
        <h3 className={styles.project_title}>{props.title}</h3>
        <div className={styles.project_tags}>{projectTags}</div>
      </motion.div>
      <motion.p variants={textVariants} className={styles.project_description}>
        {props.description}
      </motion.p>
      <motion.a
        className={styles.project_website}
        href={props.website}
        target="_blank"
        rel="noopener noreferrer"
        variants={textVariants}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
        </svg>
        View project{' '}
      </motion.a>
    </motion.article>
  );
};
