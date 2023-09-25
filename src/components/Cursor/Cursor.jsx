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
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, springDotConfig);

  React.useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      cursorDotX.set(e.clientX - 12);
      cursorDotY.set(e.clientY - 12);
    };

    const scaleCursorUp = (e) => {
      scale.set(2);
    }

    const scaleCursorDown = (e) => {
      scale.set(1);
    }

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", scaleCursorUp);
    window.addEventListener("mouseup", scaleCursorDown);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", scaleCursorUp);
      window.removeEventListener("mouseup", scaleCursorDown);


    };
  }, []);

  return (
    <>
      <motion.div
        className={styles.cursor}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scale: scaleSpring,
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
