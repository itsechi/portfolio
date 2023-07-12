import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./Cursor.module.scss";

export const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 35, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const cursorDotX = useMotionValue(-100);
  const cursorDotY = useMotionValue(-100);
  const springDotConfig = { damping: 40, stiffness: 1000 };
  const cursorDotXSpring = useSpring(cursorX, springDotConfig);
  const cursorDotYSpring = useSpring(cursorY, springDotConfig);

  React.useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      cursorDotX.set(e.clientX - 12);
      cursorDotY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        className={styles.cursor}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />

      <motion.div
        className={styles.cursorDot}
        style={{
          translateX: cursorDotXSpring,
          translateY: cursorDotYSpring,
        }}
      />
    </>
  );
};
