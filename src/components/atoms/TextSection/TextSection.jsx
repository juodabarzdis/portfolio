import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./TextSection.module.scss";

const TextSection = () => {
  return (
    <div className={styles["text-section"]}>
      <div className={styles["title-container"]}>
        <p className={styles["title-container__title"]}>About me</p>
      </div>
      <div className={styles["content-container"]}>
        <p className={styles["content-container__text"]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
          et fugiat minus perferendis dolorem accusamus. Rerum, error. Sed rerum
          eius maxime beatae corrupti recusandae. Eligendi odio blanditiis nisi,
          atque iste officiis culpa modi numquam quasi non quidem soluta
          accusantium magni commodi, ipsam aliquid harum quam debitis facilis,
          explicabo totam tenetur!
        </p>
      </div>
    </div>
  );
};

export default TextSection;
