import { useEffect } from "react";
import styles from "./Article.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image1 from "../../../assets/images/person-1.jpeg";
import Image2 from "../../../assets/images/person-2.jpeg";

const Article = () => {
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
    <motion.section className={styles.article} ref={ref}>
      <motion.div
        className={styles["side-1"]}
        animate={controls}
        initial="hidden"
        variants={variants}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <img src={Image1} alt="Person 1" />
        <p>The image</p>
      </motion.div>
      <motion.div
        className={styles["side-2"]}
        animate={controls}
        initial="hidden"
        variants={variants}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <img src={Image2} alt="Person 2" />
        <p>The second image</p>
      </motion.div>
    </motion.section>
  );
};

export default Article;
