import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./TextSection.module.scss";

const TextSection = () => {
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
        <p className={styles["title-container__title"]}>About me</p>
      </div>
      <div className={styles["content-container"]}>
        <p className={styles["content-container__text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor,
          ea, temporibus inventore suscipit, in voluptate facilis neque eos modi
          est quod voluptates expedita? Voluptas, vero doloremque molestiae
          minima vel officiis accusamus culpa non nemo quaerat? Cumque quisquam
          saepe cum incidunt, ipsum nam unde ea nobis? Iste corrupti earum
          ullam?
        </p>
      </div>
    </motion.div>
  );
};

export default TextSection;
