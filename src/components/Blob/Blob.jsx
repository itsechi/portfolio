import { motion } from "framer-motion";
import React from "react";
import styles from "./Blob.module.scss";
import PropTypes from "prop-types";

export const Blob = (props) => {
  const height = window.innerHeight - 200;
  const width = window.innerWidth - 200;
  const [rotate, setRotate] = React.useState(Math.floor(Math.random() * 360));
  const [y, setY] = React.useState(Math.floor(Math.random() * height));
  const [x, setX] = React.useState(Math.floor(Math.random() * width));
  const transformedX = `calc(${x}px - 30%)`;
  const transformedY = `calc(${y}px - 30%)`;

  const getRandomCoords = () => {
    const randomY = Math.floor(Math.random() * height);
    const randomX = Math.floor(Math.random() * width);
    setY(randomY);
    setX(randomX);
    // console.log("Y:" + randomY + "; X:" + randomX);
    setRotate(Math.floor(Math.random() * 360));
  };

  return (
    <motion.div
      animate={{ x: transformedX, y: transformedY, rotate: rotate }}
      transition={{
        ease: "easeInOut",
        duration: 5,
      }}
      onAnimationComplete={() => {
        getRandomCoords();
      }}
      className={[styles.blob, styles[props.color]].join(" ")}
    />
  );
};

Blob.propTypes = {
  color: PropTypes.string,
};
