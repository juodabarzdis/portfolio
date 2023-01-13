import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import BorderImage from "../../atoms/BorderImage";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["content-container"]}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles["content-container__hello"]}
        >
          <h1 className={styles["content-container__heading"]}>
            Hello World! This is Lukas calling.
          </h1>
        </motion.div>
      </div>
      <div className={styles["image-container"]}>
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          transition={{ duration: 1 }}
          className={styles["image-container__image"]}
        >
          <BorderImage />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
