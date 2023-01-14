import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import BorderImage from "../../atoms/BorderImage";
import classNames from "classnames";

const Hero = (props) => {
  const { children, border: Border, image: Image, reverse, color } = props;

  const containerClass = classNames(styles.hero, {
    [styles["hero--reverse"]]: props.reverse,
  });

  return (
    <div className={containerClass}>
      <div className={styles["content-container"]}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles["content-container__hello"]}
        >
          {children}
        </motion.div>
      </div>
      <div
        className={styles["image-container"]}
        style={{ backgroundColor: color }}
      >
        <motion.div
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ duration: 1 }}
          className={styles["image-container__image"]}
        >
          <BorderImage image={Image} border={Border} color={color} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
