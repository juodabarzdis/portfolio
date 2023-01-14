import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./TextSection.module.scss";

const TextSection = (props) => {
  const { children, title } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      className={styles["text-section"]}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className={styles["title-container"]}>
        <p className={styles["title-container__title"]}>{title}</p>
      </div>
      <div className={styles["content-container"]}>
        <p className={styles["content-container__text"]}>{children}</p>
      </div>
    </motion.div>
  );
};

export default TextSection;
