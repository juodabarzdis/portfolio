import React from "react";
import styles from "./Projects.module.scss";
import TextSection from "../../components/atoms/TextSection";
import ScrollingText from "../../components/molecules/ScrollingText";

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Projects</h1>
        <TextSection title="Projects">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          esse, adipisci possimus nesciunt praesentium vel ab hic optio quia
          ullam officiis id voluptates explicabo eum cumque eveniet beatae
          minima totam veritatis minus, dolores, iure iusto reiciendis sunt.
          Eum, similique voluptate!
        </TextSection>
        <TextSection title="Projects">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          unde voluptate impedit odio quae modi labore. Optio doloribus atque
          reprehenderit unde quam! Quisquam, est.
        </TextSection>
      </div>
      <ScrollingText color="var(--theme-yellow)" gradient={[239, 244, 131]}>
        Reach out with me via mail! I am always happy to hear from you!
      </ScrollingText>
    </>
  );
};

export default Projects;
