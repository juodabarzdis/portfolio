import React from "react";
import styles from "./About.module.scss";

import BorderImage from "../../components/atoms/BorderImage";
import Image from "../../assets/images/image-asset-2.jpeg";
import Border from "../../assets/images/Border.jsx";
import TextSection from "../../components/atoms/TextSection";
import ScrollingText from "../../components/molecules/ScrollingText";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>About me</h1>
        <div className={styles["image-container"]}>
          <BorderImage
            image={Image}
            border={Border}
            color={"var(--theme-yellow)"}
          />
        </div>
        <TextSection title="About me">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque
          consequatur omnis incidunt libero placeat porro adipisci assumenda,
          ipsa voluptas sequi doloremque tempore magni iure corporis in sed
          facere. Quas.
        </TextSection>
      </div>
      <ScrollingText color="var(--theme-yellow)" gradient={[239, 244, 131]}>
        Reach out with me via mail! I am always happy to hear from you!
      </ScrollingText>
    </>
  );
};

export default About;
