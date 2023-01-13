import React from "react";
import Image from "../../../assets/images/image-asset.jpeg";
import Shape from "../../../assets/images/Border.jsx";
import styles from "./BorderImage.module.scss";

const BorderImage = () => {
  return (
    <div className={styles.frame}>
      <img className={styles.frame__img} src={Image} alt="image" />
      <div className={styles.frame__shape}>
        <Shape />
      </div>
    </div>
  );
};

export default BorderImage;
