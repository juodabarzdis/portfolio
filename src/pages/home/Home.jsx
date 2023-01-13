import React from "react";
import styles from "./Home.module.scss";

import Hero from "../../components/molecules/hero/Hero";
import TextSection from "../../components/atoms/TextSection";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <div className={styles.middle}>
        <TextSection />
      </div>
    </div>
  );
};

export default Home;
