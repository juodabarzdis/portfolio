import React from "react";
import styles from "./BorderImage.module.scss";

const BorderImage = (props) => {
  const { border: Border, image: Image, color } = props;

  return (
    <div className={styles.frame} style={{ backgroundColor: color }}>
      <img className={styles.frame__img} src={Image} alt="image" />
      <div className={styles.frame__shape} style={{ fill: color }}>
        <Border />
      </div>
    </div>
  );
};

export default BorderImage;
