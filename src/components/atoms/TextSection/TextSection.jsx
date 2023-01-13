import { useEffect } from "react";
import { useAnimation, motion, delay } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./TextSection.module.scss";

const TextSection = () => {
  //text appear on scroll to view

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
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
      transition={{ duration: 0.5, delay: 0.1 }}
      variants={variants}
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
